from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Berita(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(null=True, blank=True)
    title = models.CharField(max_length=150)
    description = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
    class Meta:
        db_table = "tbBerita"

class Galeri(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=150)
    description = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
    class Meta:
        db_table = "tbGaleri"

class GaleriImage(models.Model):
    galeri = models.ForeignKey(Galeri, on_delete=models.SET_NULL, null=True)
    image = models.ImageField(null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = "tbGaleriImage"