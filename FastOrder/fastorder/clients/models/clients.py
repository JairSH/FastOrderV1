from django.db import models

from fastorder.utils.models import CRideModel
from fastorder.menus.models import Bebida, Platillo, Postre


class Cliente(CRideModel):
    name = models.CharField('Name', max_length=140)
    last_name = models.CharField('Last Name', max_length=140)
    description = models.TextField(max_length=500, blank=True)

    def __str__(self):
        return self.name


class Orden(CRideModel):
    bebida = models.ForeignKey(Bebida, on_delete=models.CASCADE)
    platillo = models.ForeignKey(Platillo, on_delete=models.CASCADE)
    postre = models.ForeignKey(Postre, on_delete=models.CASCADE)
    comments = models.TextField(max_length=500, blank=True)

    def __str__(self):
        return self.name
