# Generated by Django 3.1 on 2020-09-06 03:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200906_1227'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='password',
        ),
    ]