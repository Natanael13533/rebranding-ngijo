from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response

from app.models import Berita, Galeri
from app.serializers import BeritaSerializer, GaleriSerializer

# Create your views here.

class BeritaList(APIView):
    def get(self, request, format=None):
        beritaList = Berita.objects.all()
        serializer = BeritaSerializer(beritaList, many=True)
        return Response(serializer.data)

class GaleriList(APIView):
    def get(self, request, format=None):
        galeriList = Galeri.objects.all()
        serializer = GaleriSerializer(galeriList, many=True)
        return Response(serializer.data)