from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('fish', views.FishView)
router.register('bugs', views.BugView)


urlpatterns = [
    path('', include(router.urls))
]