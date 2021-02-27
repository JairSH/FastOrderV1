from django.contrib import admin


from fastorder.clients.models import Cliente, Orden


@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ('name', 'last_name', 'description')
    list_filter = ('created', 'modified')


@admin.register(Orden)
class OrdenAdmin(admin.ModelAdmin):
    list_display = ('bebida', 'platillo', 'postre', 'comments')
    list_filter = ('created', 'modified')
