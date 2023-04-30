from django.urls import path
from . import views

urlpatterns = [
    path('/hello', views.say_hello, name='hello'),
    path('/list', views.player_list, name='list'),
    path('/list/<int:id>', views.player_detail)
]
