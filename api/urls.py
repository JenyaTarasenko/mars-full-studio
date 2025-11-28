from django.contrib import admin
from django.urls import path, include
from .views import StudioMarsListAPIView, StudioMarsListDetailView

app_name = 'api'

urlpatterns = [
   #список проектов
   path('projects/', StudioMarsListAPIView.as_view(), name='studio-list'),
   #детальная страница проектов
   path('projects/<slug:slug>/', StudioMarsListDetailView.as_view(), name='project-detail'),
   
] 