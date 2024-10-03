from rest_framework import serializers
from django.contrib.auth.models import User
from app.models import Berita, Galeri, BeritaImage, Pegawai

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class GaleriSerializer(serializers.ModelSerializer):
    class Meta:
        model = Galeri
        fields = '__all__'
        extra_kwargs = {"user": {"read_only": True}}

class BeritaImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = BeritaImage
        fields = ['berita', 'image']
        extra_kwargs = {"galeri": {"read_only": True}}

class BeritaSerializer(serializers.ModelSerializer):
    images = BeritaImagesSerializer(many=True, read_only=True, source='beritaimage_set')

    class Meta:
        model = Berita
        fields = '__all__'
        extra_kwargs = {"user": {"read_only": True}}

class PegawaiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pegawai
        fields = '__all__'
        extra_kwargs = {"user": {"read_only": True}}