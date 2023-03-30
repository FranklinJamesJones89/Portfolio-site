from django.urls import path

from . import views

app_name = 'mysites'

urlpatterns = [
    path('', views.index, name = 'index'),
    path('terminal', views.terminal, name = 'terminal'),
    path('projects', views.projects, name = 'projects'),
    path('help', views.help, name = 'help'),
    path('about', views.about, name = 'about'),
    path('blog', views.blog, name = 'blog'),
    path('resume', views.resume, name = 'resume')
]
