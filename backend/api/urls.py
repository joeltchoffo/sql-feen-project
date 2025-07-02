from django.urls import path
from .views import RegisterView, ProgressView
from .views import MissionEvaluateView


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
     path("progress/", ProgressView.as_view(), name="progress"),
     path("mission/<int:level>/<int:mission>/", MissionEvaluateView.as_view()),
]
