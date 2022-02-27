from http.client import HTTPResponse
from rest_framework import permissions, generics

from api.serializers.pokemon import PokemonSerializer
from api.models.pokemon import Pokemon


class PokemonListCreateView(generics.ListCreateAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
    permission_classes = [permissions.IsAdminUser]

class PokemonDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
    permission_classes = [permissions.IsAdminUser]

    def get_object(self):
        pokemon = Pokemon.objects.filter(id=self.kwargs['pk']).first()
        return pokemon
