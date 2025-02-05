from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MeetingLogViewSet

router = DefaultRouter()
router.register(r'meetings', MeetingLogViewSet)

urlpatterns = [
    path('', include(router.urls)),
]