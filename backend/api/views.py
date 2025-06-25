from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User

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
