from django.core.validators import MaxValueValidator
from django.db import models


class Fish(models.Model):
    name = models.CharField(max_length=255)
    spawn_month_north = models.CharField(max_length=255)
    spawn_month_south = models.CharField(max_length=255)
    spawn_time = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    shadow_size = models.CharField(max_length=255)
    sell_price = models.PositiveIntegerField(validators=[MaxValueValidator(999999)])
    photo_url = models.CharField(max_length=400)

    def __str__(self):
        return self.name

class Bug(models.Model):
    name = models.CharField(max_length=255)
    family = models.CharField(max_length=255)
    spawn_month_north = models.CharField(max_length=255)
    spawn_month_south = models.CharField(max_length=255)
    spawn_time = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    movement = models.CharField(max_length=255)
    sell_price = models.PositiveIntegerField(validators=[MaxValueValidator(999999)])
    photo_url = models.CharField(max_length=400)

    def __str__(self):
        return self.name

class Fossil(models.Model):
    name = models.CharField(max_length=255)
    piece_one = models.CharField(max_length=255)
    piece_one_price = models.PositiveIntegerField(validators=[MaxValueValidator(999999)])
    piece_two = models.CharField(max_length=255, blank=True, null=True)
    piece_two_price = models.PositiveIntegerField(validators=[MaxValueValidator(999999)], blank=True, null=True)
    piece_three = models.CharField(max_length=255, blank=True, null=True)
    piece_three_price = models.PositiveIntegerField(validators=[MaxValueValidator(999999)], blank=True, null=True)
    piece_four = models.CharField(max_length=255, blank=True, null=True)
    piece_four_price = models.PositiveIntegerField(validators=[MaxValueValidator(999999)], blank=True, null=True)
    piece_five = models.CharField(max_length=255, blank=True, null=True)
    piece_five_price = models.PositiveIntegerField(validators=[MaxValueValidator(999999)], blank=True, null=True)
    photo_url = models.CharField(max_length=400)

    def __str__(self):
        return self.name