from app import views
from django.urls import path

urlpatterns = [
    path('berita/', views.BeritaList.as_view(), name='getBeritaList'),
    path('galeri/', views.GaleriList.as_view(), name='getBeritaList'),
]
