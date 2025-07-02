from django.shortcuts import render

import sqlite3

# Create your views here.
from rest_framework import status
from spieldaten.models import Mission
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated

class RegisterView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        if not username or not password:
            return Response({'error': 'Felder erforderlich'}, status=400)
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Benutzername vergeben'}, status=400)
        User.objects.create_user(username=username, password=password)
        return Response({'message': 'Registrierung erfolgreich'}, status=201)

class ProgressView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        data = {
            "username": user.username,
            "points": 42,
            "scrolls": ["SUBSTR", "JOIN"],
            "completed_missions": ["L1M1", "L1M2"],
        }
        return Response(data)
    
class MissionEvaluateView(APIView):
    permission_classes = [IsAuthenticated]
    permission_classes     = [IsAuthenticated]
    def post(self, request, level, mission):
        sql = request.data.get("sql")
        if not sql:
            return Response({"error": "Keine SQL-Abfrage gesendet"}, status=400)

        # Mission holen (optional)
        try:
            mission_obj = Mission.objects.get(level=level, mission=mission)
        except Mission.DoesNotExist:
            return Response({"error": "Mission nicht gefunden"}, status=404)

        # Verbindung zur Spieldatenbank (sqlite)
        try:
            conn = sqlite3.connect("spieldaten.sqlite3")
            cursor = conn.cursor()
            cursor.execute(sql)
            columns = [col[0] for col in cursor.description]
            rows = cursor.fetchall()
            conn.close()

            result = [dict(zip(columns, row)) for row in rows]
            return Response({"result": result})
        except Exception as e:
            return Response({"error": str(e)}, status=400)