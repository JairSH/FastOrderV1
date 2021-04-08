from django.db import models

from fastorder.utils.models import CRideModel
from fastorder.menus.models import Bebida, Platillo, Postre

class Orden(CRideModel):
    bebida = models.ManyToManyField(Bebida)
    platillo = models.ManyToManyField(Platillo)
    postre = models.ManyToManyField(Postre)
    comments = models.TextField(max_length=500, blank=True)

    def __str__(self):
        return str(self.pk)
