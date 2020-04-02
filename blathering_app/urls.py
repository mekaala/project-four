from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('fish', views.FishView)
router.register('bugs', views.BugView)
router.register('fossils', views.FossilView)


urlpatterns = [
    path('', include(router.urls))
]