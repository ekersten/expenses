# Generated by Django 2.1.3 on 2019-01-02 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'ordering': ['name']},
        ),
        migrations.AlterModelOptions(
            name='expense',
            options={'ordering': ['-date']},
        ),
        migrations.AlterField(
            model_name='expense',
            name='note',
            field=models.TextField(blank=True, null=True),
        ),
    ]
