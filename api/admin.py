from django.contrib import admin
from .models import StudioMars
from modeltranslation.admin import TranslationAdmin


@admin.register(StudioMars)
class StudioMarsAdmin(TranslationAdmin):
    list_display = ('name', 'slug', 'description', 'text_job', 'text_prototip', 'text_prototip_end','url')
    search_fields = ('name', 'description')
    # для автоматического слага важноо
    prepopulated_fields = {"slug": ("name",)}
 
