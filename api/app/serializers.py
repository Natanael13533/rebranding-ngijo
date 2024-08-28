from rest_framework import serializers
from django.contrib.auth.models import User
from app.models import Berita, Galeri, GaleriImage

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class BeritaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Berita
        fields = '__all__'
        extra_kwargs = {"user": {"read_only": True}}

class GaleriImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = GaleriImage
        fields = ['galeri', 'image']
        extra_kwargs = {"galeri": {"read_only": True}}

class GaleriSerializer(serializers.ModelSerializer):
    images = GaleriImagesSerializer(many=True, read_only=True, source='galeriimage_set')

    class Meta:
        model = Galeri
        fields = '__all__'
        extra_kwargs = {"user": {"read_only": True}}