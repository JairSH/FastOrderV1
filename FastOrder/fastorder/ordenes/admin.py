from django.contrib import admin


from fastorder.clients.models import Orden

@admin.register(Orden)
class OrdenAdmin(admin.ModelAdmin):
    list_display = ('bebida', 'platillo', 'postre', 'comments')
    list_filter = ('created', 'modified')
