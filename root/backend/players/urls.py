from django.urls import path
from . import views
from .views import home


urlpatterns = [
    # path('', views.home, name='home'),
    path('login/', views.home, name='login'),
    path('logout/', views.logout_user, name='logout')
]


