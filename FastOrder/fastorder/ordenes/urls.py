# Django
from django.urls import include, path

# Django REST Framawork
from rest_framework.routers import DefaultRouter

# Views
from . import views

router = DefaultRouter()
router.register(r'ordenes', views.OrdenViewSet, basename='ordenes')


urlpatterns = [
    path('', include(router.urls)),
    path('api/v1/ordenes/', views.OrdenesView.as_view())
]
