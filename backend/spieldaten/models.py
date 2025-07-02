from django.db import models

class Mission(models.Model):
    level = models.IntegerField()
    mission = models.IntegerField()
    punkte = models.IntegerField(default=0)
    loesung = models.TextField()  # optional: erwartet richtige SQL-Abfrage

    class Meta:
        unique_together = ("level", "mission")
    def __str__(self):
        return f"Level {self.level} – Mission {self.mission}"
