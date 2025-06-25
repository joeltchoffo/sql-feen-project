from django.contrib import admin
from .models import (
    SpielerProfil,
    Schlüsselwort,
    SpielerSchlüsselwort,
    SpielerMission
)

admin.site.register(SpielerProfil)
admin.site.register(Schlüsselwort)
admin.site.register(SpielerSchlüsselwort)
admin.site.register(SpielerMission)
