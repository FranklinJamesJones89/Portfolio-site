from django.shortcuts import render

import datetime

# Create your views here.

def index(request):
    return render(request, 'mysites/index.html')

def terminal(request):
    context = {}
    return render(request, 'mysites/terminal.html', context)

def projects(request):
    return render(request, 'mysites/projects.html')

def help(request):
    currentDateTime = datetime.datetime.now()
    date = currentDateTime.date()
    year = date.strftime("%Y")

    return render(request, 'mysites/help.html', {'year': year})

def about(request):
    return render(request, 'mysites/about.html')

def blog(request):
    return render(request, 'mysites/blog.html')

def resume(request):
    return render(request, 'mysites/resume.html')
