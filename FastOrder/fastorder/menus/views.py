# Django REST Framework
from rest_framework import viewsets

# Serializers
from fastorder.menus.serializers import (BebidaModelSerializer,
                                         PostreModelSerializer,
                                         PlatilloModelSerializer)
# Models
from fastorder.menus.models import Bebida, Platillo, Postre


class PostreViewSet(viewsets.ModelViewSet):
    queryset = Postre.objects.all()
    serializer_class = PostreModelSerializer


class PlatilloViewSet(viewsets.ModelViewSet):
    queryset = Platillo.objects.all()
    serializer_class = PlatilloModelSerializer


class BebidaViewSet(viewsets.ModelViewSet):
    queryset = Bebida.objects.all()
    serializer_class = BebidaModelSerializer
