from rest_framework import viewsets

from .models import People
from .serializers import PeopleSerializer
from .meta import Metadata


class PeopleViewset(viewsets.ModelViewSet):
    queryset = People.objects.all()
    serializer_class = PeopleSerializer
