# Generated by Django 3.0.4 on 2020-04-03 19:05

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blathering_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fossil',
            name='mid_piece',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='fossil',
            name='mid_price',
            field=models.PositiveIntegerField(blank=True, null=True, validators=[django.core.validators.MaxValueValidator(999999)]),
        ),
        migrations.AlterField(
            model_name='fossil',
            name='tail_piece',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='fossil',
            name='tail_price',
            field=models.PositiveIntegerField(blank=True, null=True, validators=[django.core.validators.MaxValueValidator(999999)]),
        ),
    ]
