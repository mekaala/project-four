# Generated by Django 3.0.4 on 2020-04-03 16:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blathering_app', '0002_auto_20200403_1506'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='fossil',
            name='era',
        ),
    ]
