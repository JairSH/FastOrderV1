# Django REST Framework
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response


# Serializers
from fastorder.ordenes.serializers import (OrdenModelSerializer)
# Models
from fastorder.ordenes.models import Orden

class OrdenViewSet(viewsets.ModelViewSet):
    queryset = Orden.objects.all()
    serializer_class = OrdenModelSerializer

class OrdenesView(APIView):
    def post(self, request):
        data = request.data

        obj = Orden(
            comments = data.get('comment', ''),
        )
        obj.save()

        for pk_platillo in data.get('platillo', []):
            obj.platillo.add(pk_platillo)
                
        return Response('ok')
