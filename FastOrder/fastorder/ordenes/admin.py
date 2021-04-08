from django.contrib import admin


from fastorder.ordenes.models import Orden

@admin.register(Orden)
class OrdenAdmin(admin.ModelAdmin):
    list_filter = ('created', 'modified')
