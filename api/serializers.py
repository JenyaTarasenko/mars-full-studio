from rest_framework import serializers
from .models import StudioMars


# разние поля для переводов
class StudioMarsSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudioMars
        fields = [
            'id',
            'name_ru', 'name_en','name_uk',
            'description_ru', 'description_en','description_uk',
            'text_job_ru', 'text_job_en', 'text_job_uk',
            'text_prototip_ru', 'text_prototip_en','text_prototip_uk',
            'text_prototip_end_ru', 'text_prototip_end_en','text_prototip_end_uk',
            'image_description',
            'image_job',
            'image_prototip',
            'image_prototip_end',
            'slug',
            'url',
        ]
