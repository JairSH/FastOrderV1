# Django
from django.urls import include, path

# Django REST Framawork
from rest_framework.routers import DefaultRouter

# Views
from .views import BebidaViewSet
from .views import PlatilloViewSet
from .views import PostreViewSet

router = DefaultRouter()
router.register(r'bebidas', BebidaViewSet, basename='bebidas')
router.register(r'postres', PostreViewSet, basename='postres')
router.register(r'platillos', PlatilloViewSet, basename='platillos')


urlpatterns = [
    path('', include(router.urls)),
]
