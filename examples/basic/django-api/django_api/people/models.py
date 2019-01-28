from django.db import models
from django_countries.fields import CountryField


class People(models.Model):
    DESCRIPTION_HELP_TEXT = ('Tell us about you!')
    GENDER_MALE = 'M'
    GENDER_FEMALE = 'F'
    GENDER_OTHER = 'O'
    GENDER_CHOICES = [
        (GENDER_MALE, 'Male'),
        (GENDER_FEMALE, 'Female'),
        (GENDER_OTHER, 'Other'),
    ]

    name = models.CharField(max_length=128)
    email = models.EmailField(
        max_length=100,
        unique=True,
        editable=False,
    )
    country = CountryField()
    birthday = models.DateField()
    gender = models.CharField(
        max_length=1,
        choices=GENDER_CHOICES,
        blank=True,
    )
    activated = models.BooleanField(
        default=True,
    )
    about = models.TextField(
        max_length=300,
        blank=True,
        help_text=DESCRIPTION_HELP_TEXT)
