"""Main URLs module."""

from django.conf import settings
from django.urls import include, path
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = [
    # Django Admin
    path(settings.ADMIN_URL, admin.site.urls),
    path('', include(('fastorder.users.urls', 'users'), namespace='users')),
    path('', include(('fastorder.menus.urls', 'menus'), namespace='menus')),
    path('', include(('fastorder.clients.urls', 'clients'), namespace='clients')),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
