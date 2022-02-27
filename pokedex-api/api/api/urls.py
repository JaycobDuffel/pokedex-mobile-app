from django.urls import include, path
from rest_framework import routers
from api.views import user, group, pokemon
from django.contrib import admin


router = routers.DefaultRouter()
router.register(r'users', user.UserViewSet)
router.register(r'groups', group.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path("admin/", admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('pokemon/', pokemon.PokemonListCreateView.as_view()),
]