# Generated by Django 3.1 on 2020-09-17 07:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0004_imagesection'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='imagesection',
            name='img',
        ),
    ]
