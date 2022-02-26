from django.contrib import admin
from api.models.pokemon import Pokemon

class PokemonAdmin(admin.ModelAdmin):
      list_display    = ['name', 'pokedex_entry', 'type', 'default_sprite', 'shiny_sprite']

admin.site.register(Pokemon, PokemonAdmin)