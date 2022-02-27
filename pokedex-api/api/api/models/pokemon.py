from django.db import models


class Pokemon(models.Model):
    name = models.CharField(max_length=45)
    pokedex_entry = models.IntegerField()
    type = models.CharField(max_length=15)
    default_sprite = models.CharField(max_length=150)
    shiny_sprite = models.CharField(max_length=150)
    created_datetime = models.DateTimeField(auto_now_add=True)
    updated_datetime = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
