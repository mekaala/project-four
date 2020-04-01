from rest_framework import serializers

from .models import Fish, Bug, Fossil


class FishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fish
        fields = ('id', 'name', 'spawn_month_north', 'spawn_month_south', 'spawn_time', 'location', 'shadow_size', 'sell_price', 'photo_url')

class BugSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bug
        fields = ('id', 'name', 'family', 'spawn_month_north', 'spawn_month_south', 'spawn_time', 'location', 'movement', 'dangerous', 'sell_price', 'photo_url')

class FossilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fossil
        fields = ('id', 'name', 'era', 'head_piece', 'head_price', 'mid_piece', 'mid_price', 'tail_piece', 'tail_price', 'photo_url')