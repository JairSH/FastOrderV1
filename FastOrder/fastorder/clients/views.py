# Django REST Framework
from rest_framework import viewsets

# Serializers
from fastorder.clients.serializers import (OrdenModelSerializer,
                                           ClienteModelSerializer)
# Models
from fastorder.clients.models import Cliente, Orden


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteModelSerializer


class OrdenViewSet(viewsets.ModelViewSet):
    queryset = Orden.objects.all()
    serializer_class = OrdenModelSerializer
