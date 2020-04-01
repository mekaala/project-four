from rest_framework import viewsets

from .serializers import FishSerializer, BugSerializer, FossilSerializer
from .models import Fish, Bug, Fossil


class FishView(viewsets.ModelViewSet):
    queryset = Fish.objects.all()
    serializer_class = FishSerializer

class BugView(viewsets.ModelViewSet):
    queryset = Bug.objects.all()
    serializer_class = BugSerializer

class FossilView(viewsets.ModelViewSet):
    queryset = Fossil.objects.all()
    serializer_class = FossilSerializer