# Django REST Framework
from rest_framework import viewsets

# Serializers
from fastorder.clients.serializers import (OrdenModelSerializer)
# Models
from fastorder.clients.models import Orden

class OrdenViewSet(viewsets.ModelViewSet):
    queryset = Orden.objects.all()
    serializer_class = OrdenModelSerializer
