from django.shortcuts import render
from django.http import Http404

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

class BeritaDetail(APIView):
    def get_object(self, pk):
        try:
            return Berita.objects.get(pk=pk)
        except Berita.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        berita = self.get_object(pk)
        serializer = BeritaSerializer(berita)
        return Response(serializer.data)

class GaleriList(APIView):
    def get(self, request, format=None):
        galeriList = Galeri.objects.all()
        serializer = GaleriSerializer(galeriList, many=True)
        return Response(serializer.data)

class GaleriDetail(APIView):
    def get_object(self, pk):
        try:
            return Galeri.objects.get(pk=pk)
        except Galeri.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        galeri = self.get_object(pk)
        serializer = GaleriSerializer(galeri)
        return Response(serializer.data)