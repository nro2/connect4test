"""
Definition of views.
"""

from datetime import datetime
from django.shortcuts import render
from django.http import HttpRequest, HttpResponseRedirect


def home(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'index.html',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )


def howToPlay(request):
    """Renders the contact page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'howToPlay.html',
        {
            'title':'How To Play',
            'message':'',
            'year':datetime.now().year,
        }
    )

def about(request):
    """Renders the about page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'about.html',
        {
            'title':'About',
            'message':'Your application description page.',
            'year': datetime.now().year,
        }
    )

def select(request):
    """Renders the select page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'select.html',
        {
            'title':'Select Game Mode',
            'message': 'Select number of players and difficulty',
            'year': datetime.now().year,
        }
    )

def play(request):
    """Renders the game."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'play.html',
        {
            'title':'Connect 4',
            'year':datetime.now().year,
        }
    )

def onePlayer(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'play.html',
        {
            'title':'Connect 4',
            'year':datetime.now().year,
        }
    )

def twoPlayer(request):
    assert isinstance(request, HttpRequest)
    return HttpResponseRedirect('/play/')

def newGame(request):
    assert isinstance(request, HttpRequest)
    return HttpResponseRedirect('/select/')