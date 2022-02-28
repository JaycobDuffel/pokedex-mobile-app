# Generated by Django 4.0.2 on 2022-02-26 20:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pokemon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45)),
                ('pokedex_entry', models.IntegerField()),
                ('type', models.CharField(max_length=15)),
                ('default_sprite', models.ImageField(upload_to='pokemon/default_sprites/')),
                ('shiny_sprite', models.ImageField(upload_to='pokemon/shiny_sprites/')),
                ('created_datetime', models.DateTimeField(auto_now_add=True)),
                ('updated_datetime', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]