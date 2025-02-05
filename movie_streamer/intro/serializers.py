from rest_framework import serializers
from .models import MeetingLog

class MeetingLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = MeetingLog
        fields = '__all__'
