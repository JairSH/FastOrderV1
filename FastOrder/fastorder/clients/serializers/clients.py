# Django REST Framework
from rest_framework import serializers

# Models
from fastorder.clients.models import Cliente, Orden


class ClienteModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cliente
        fields = (
            'name',
            'last_name',
            'orden',
            'description'
        )


class OrdenModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Orden
        fields = (
            'bebida',
            'platillo',
            'postre',
            'comments'
        )
