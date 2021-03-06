"""
Definition of urls for connect4_django.
"""

from datetime import datetime
from django.urls import path
from django.contrib import admin
from django.contrib.auth.views import LoginView, LogoutView
from app import views


urlpatterns = [
    path('', views.home, name='home'),
    path('howtoplay/', views.howToPlay, name='howtoplay'),
    path('about/', views.about, name='about'),
    path('select/', views.select, name='select'),
    path('newgame/', views.newGame, name='newgame'),
    path('play/', views.play, name='play'),
    path('twoplayer/', views.twoPlayer, name='twoplayer'),
    path('admin/', admin.site.urls),
]