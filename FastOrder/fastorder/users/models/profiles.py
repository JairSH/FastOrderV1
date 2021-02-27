from django.db import models
from django.contrib.auth.models import AbstractUser

from fastorder.utils.models import CRideModel
from fastorder.users.models import User
from fastorder.clients.models import Cliente


class Profile(CRideModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    clientes = models.ManyToManyField(Cliente)
    picture = models.ImageField(
        'profile picture',
        upload_to='users/pictures/',
        blank=True,
        null=True
    )
    user_choices = (
        ('mesero', 'mesero'),
        ('cocinero', 'cocinero'),
    )
    usuario = models.CharField(
        max_length=35,
        blank=False,
        null=True,
        choices=user_choices
    )
    biography = models.TextField(max_length=500, blank=True)

    def __str__(self):
        return str(self.user)
