from django.shortcuts import render

# Create your views here.
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