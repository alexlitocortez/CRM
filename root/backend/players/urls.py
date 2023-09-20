from django.urls import path
from . import views
from django.views.generic import TemplateView


urlpatterns = [
    path('', views.home, name='home'),
    path('logout/', views.logout_user, name='logout'),
    path('register/', views.register_user, name='register'),
    # path('model-data/', views.get_model_data, name='model data'),
]




