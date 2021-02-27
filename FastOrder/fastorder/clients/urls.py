# Django
from django.urls import include, path

# Django REST Framawork
from rest_framework.routers import DefaultRouter

# Views
from .views import ClienteViewSet
from .views import OrdenViewSet


router = DefaultRouter()
router.register(r'clientes', ClienteViewSet, basename='clientes')
router.register(r'ordenes', OrdenViewSet, basename='ordenes')


urlpatterns = [
    path('', include(router.urls)),
]
