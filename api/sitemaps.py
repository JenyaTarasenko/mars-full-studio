# api/sitemaps.py
from django.contrib.sitemaps import Sitemap
from .models import StudioMars # если есть проекты

class StaticViewSitemap(Sitemap):
    priority = 0.8
    changefreq = 'weekly'

    def items(self):
        # просто возвращаем URL-строки
        return ['/', '/about-mars-studio']

    def location(self, item):
        # возвращаем путь напрямую
        return item

class ProjectSitemap(Sitemap):
    priority = 0.6
    changefreq = 'monthly'

    def items(self):
        return StudioMars.objects.all().order_by('id') 
        # return Project.objects.all()

# для формирования динамически проектов сео
    def location(self, obj):
        # путь к проекту через slug
        return f'/projects/{obj.slug}/'
        # return f'https://builderalexander.pythonanywhere.com/projects/{obj.slug}/'