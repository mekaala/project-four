# Generated by Django 3.0.4 on 2020-04-01 00:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blathering_app', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Bug',
        ),
        migrations.DeleteModel(
            name='Fish',
        ),
        migrations.DeleteModel(
            name='Fossil',
        ),
    ]
