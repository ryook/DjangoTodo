# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2018-04-17 19:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='kiji_id',
            field=models.CharField(max_length=200, unique=True),
        ),
    ]