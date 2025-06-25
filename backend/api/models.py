from django.db import models
from django.contrib.auth.models import User

class SpielerProfil(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    punkte = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.username} – {self.punkte} Punkte"

class Schlüsselwort(models.Model):
    bezeichnung = models.CharField(max_length=50, unique=True)
    preis = models.IntegerField()

    def __str__(self):
        return self.bezeichnung

class SpielerSchlüsselwort(models.Model):
    spieler = models.ForeignKey(SpielerProfil, on_delete=models.CASCADE)
    schlüsselwort = models.ForeignKey(Schlüsselwort, on_delete=models.CASCADE)
    gekauft_am = models.DateTimeField(auto_now_add=True)

class SpielerMission(models.Model):
    spieler = models.ForeignKey(SpielerProfil, on_delete=models.CASCADE)
    mission_key = models.CharField(max_length=20)  # z. B. "L1M1"
    abgeschlossen_am = models.DateTimeField(auto_now_add=True)
