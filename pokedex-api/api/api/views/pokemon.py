from http.client import HTTPResponse
import json
from api.models.pokemon import Pokemon
from rest_framework import viewsets, permissions
from api.serializers.pokemon import PokemonSerializer


def store_pokemon(request):
    with open("sample.json", "r") as json_file:
        pokemon_list = json.load(json_file)
        for key, value in pokemon_list.items():
            print(key)
            pokemon = Pokemon(
                name=value["name"].title(),
                pokedex_entry=value["id"],
                type=value["type"],
                default_sprite=value["default_sprite"],
                shiny_sprite=value["shiny_sprite"],
            )
            pokemon.save()
    return HTTPResponse({'status': 200})
