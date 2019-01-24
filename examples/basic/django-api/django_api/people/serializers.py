from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from .models import People


class PeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = People
        fields = [
            'id',
            'name',
            'email',
            'country',
            'birthday',
            'gender',
            'activated',
        ]

    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=People.objects)],
    )
