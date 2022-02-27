from rest_framework import serializers
from api.models.pokemon import Pokemon

class PokemonSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pokemon
        fields = ['name', 'pokedex_entry', 'type', 'default_sprite', 'shiny_sprite']