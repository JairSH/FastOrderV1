# Django REST Framework
from rest_framework import serializers

# Models
from fastorder.clients.models import Orden

class OrdenModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Orden
        fields = (
            'id',
            'bebida',
            'platillo',
            'postre',
            'comments'
        )
