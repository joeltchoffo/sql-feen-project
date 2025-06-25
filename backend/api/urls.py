from django.urls import path
from .views import RegisterView, ProgressView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
     path("progress/", ProgressView.as_view(), name="progress"),
]
