# Generated by Django 3.1 on 2020-10-01 12:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0028_auto_20201001_2142'),
    ]

    operations = [
        migrations.RenameField(
            model_name='image',
            old_name='image_loc',
            new_name='path',
        ),
    ]
