from django.shortcuts import render
from .serializers import StudioMarsSerializer
from rest_framework import generics
from .models import StudioMars
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.response import Response


# список всех проектов
class StudioMarsListAPIView(generics.ListAPIView):
    queryset = StudioMars.objects.all()
    serializer_class = StudioMarsSerializer

# детальная страница проекта
class StudioMarsListDetailView(APIView):
    def get(self, request, slug):
        project = get_object_or_404(StudioMars, slug=slug)
        serializer =  StudioMarsSerializer(project, context={'request': request})
        return Response(serializer.data)
        
    
###############################SEO#####################################




