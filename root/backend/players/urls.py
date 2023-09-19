from django.urls import path
from . import views
from .views import home, homepage
from django.views.generic import TemplateView


urlpatterns = [
    path('', views.homepage, name='home'),
    path('login/', views.home, name='login'),
    path('logout/', views.logout_user, name='logout'),
    path('register/', views.register_user, name='register'),
    # path('records/', views.react_view, name='records'),
    path('model-data/', views.get_model_data, name='model data'),
]




