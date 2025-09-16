from django.conf.urls.static import static  # Добавь этот импорт
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.views.generic import TemplateView

# карты сайта .sitemaps
from django.contrib.sitemaps.views import sitemap
from api.sitemaps import StaticViewSitemap, ProjectSitemap

sitemaps = {
    'static': StaticViewSitemap,
    'projects': ProjectSitemap,
}

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls', namespace='api')),#app_name
    path("", TemplateView.as_view(template_name="base.html")),
    
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django-sitemap'),
]
# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)