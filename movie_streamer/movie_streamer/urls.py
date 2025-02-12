from django.contrib import admin
from django.urls import path, include
from django.urls import path, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('api/', include('intro.urls')),

    re_path(r'^(?!api/).*$', TemplateView.as_view(template_name="react/index.html")),
]
