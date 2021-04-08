# Django REST Framework
from rest_framework import serializers

# Models
from fastorder.menus.models import Bebida, Platillo, Postre


class BebidaModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bebida
        fields = (
            'pk',
            'name',
            'price',
            'description'
        )


class PlatilloModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Platillo
        fields = (
            'pk',
            'name',
            'price',
            'description'
        )


class PostreModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Postre
        fields = (
            'pk',
            'name',
            'price',
            'description'
        )
