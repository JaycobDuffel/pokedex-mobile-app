from api.models.pokemon import Pokemon
from rest_framework import viewsets, permissions, generics
from api.serializers.pokemon import PokemonSerializer


class PokemonListCreateView(generics.ListCreateAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
    permission_classes = [permissions.IsAdminUser]
