from django.db import models

class Mission(models.Model):
    level = models.IntegerField()
    mission = models.IntegerField()
    punkte = models.IntegerField()
    loesung = models.TextField()

    class Meta:
        app_label = 'spieldaten'

    def __str__(self):
        return f"Level {self.level} – Mission {self.mission}"
