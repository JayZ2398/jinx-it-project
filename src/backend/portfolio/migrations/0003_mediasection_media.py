# Generated by Django 3.1 on 2020-09-10 12:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_auto_20200910_2146'),
    ]

    operations = [
        migrations.AddField(
            model_name='mediasection',
            name='media',
            field=models.FileField(null=True, upload_to='uploads/%Y/%m/%d/'),
        ),
    ]
