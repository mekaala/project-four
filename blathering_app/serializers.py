from rest_framework import serializers

from .models import Fish, Bug, Fossil


class FishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fish
        fields = ('id', 'name', 'spawn_month_north', 'spawn_month_south', 'spawn_time', 'location', 'shadow_size', 'sell_price', 'photo_url')

class BugSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bug
        fields = ('id', 'name', 'family', 'spawn_month_north', 'spawn_month_south', 'spawn_time', 'location', 'movement', 'sell_price', 'photo_url')

class FossilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fossil
        fields = ('id', 'name', 'piece_one', 'piece_one_price', 'piece_two', 'piece_two_price', 'piece_three', 'piece_three_price', 'piece_four', 'piece_four_price', 'piece_five', 'piece_five_price', 'photo_url')