# Generated by Django 3.1 on 2020-09-21 12:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0012_testsection'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='TestSection',
            new_name='TestRenamedSection',
        ),
    ]