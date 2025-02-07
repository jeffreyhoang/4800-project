from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets
from .models import MeetingLog
from .serializers import MeetingLogSerializer

class MeetingLogViewSet(viewsets.ModelViewSet):
    queryset = MeetingLog.objects.all().order_by('-date')
    serializer_class = MeetingLogSerializer
    
def main(request):
    return render(request, 'homepage.html')

@api_view(['GET'])
def get_logs(request):
    data = {"message": "Hello from Django!"}
    return Response(data)