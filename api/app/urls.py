from app import views
from django.urls import path

urlpatterns = [
    path('berita/', views.BeritaList.as_view(), name='getBeritaList'),
    path('berita/<int:pk>', views.BeritaDetail.as_view(), name='getBeritaDetail'),
    path('galeri/', views.GaleriList.as_view(), name='getGaleriList'),
    path('galeri/<int:pk>', views.GaleriDetail.as_view(), name='getGaleriDetail'),
]
