from modeltranslation.translator import translator, TranslationOptions
from .models import StudioMars


class StudioMarsTranslationOptions(TranslationOptions):
    fields = ('name', 'description', 'text_job', 'text_prototip', 'text_prototip_end')

translator.register(StudioMars, StudioMarsTranslationOptions)
