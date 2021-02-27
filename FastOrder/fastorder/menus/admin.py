from django.contrib import admin


from fastorder.menus.models import Bebida, Platillo, Postre


@admin.register(Platillo)
class PlatilloAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'comida', 'description')
    list_filter = ('created', 'modified', 'comida')


@admin.register(Bebida)
class BebidaAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'bebida', 'description')
    list_filter = ('created', 'modified', 'bebida')


@admin.register(Postre)
class PostreAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'description')
    list_filter = ('created', 'modified')
