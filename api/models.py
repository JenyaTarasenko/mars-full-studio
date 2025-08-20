from django.db import models
import modeltranslation  
from django.utils.text import slugify

class StudioMars(models.Model):
    # название проекта
    name = models.CharField("Название проекта", max_length=200)
    # краткое описание проекта
    description = models.TextField("Описание проекта", blank=True)
    # картинка описания  проекта
    image_description = models.ImageField(upload_to='image-studio/')
    # краткие шаги описания 
    text_job = models.TextField("Шаги (описание)", blank=True)
    # краткие шаги описания  картинка
    image_job = models.ImageField(upload_to='image-studio/')
    # краткие шаги описания  прототипа проекта
    text_prototip = models.TextField("Прототип (описание)", blank=True)
    # краткие шаги описания  прототипа проекта картинка
    image_prototip = models.ImageField(upload_to='image-studio/')
    # краткие шаги описания  прототипа проекта картинка конечный результат 
    text_prototip_end = models.TextField("Прототип (итог, описание)", blank=True)
    # краткие шаги описания  прототипа проекта картинка конечный результат 
    image_prototip_end = models.ImageField(upload_to='image-studio/')
    #  уникальные слаги для урл
    slug = models.SlugField(unique=True, blank=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Проект Studio Mars"
        verbose_name_plural = "Проекты Studio Mars"
