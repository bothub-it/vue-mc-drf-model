from rest_framework import routers

from .viewsets import PeopleViewset


router = routers.DefaultRouter()
router.register(r'people', PeopleViewset)
