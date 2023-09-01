from django.urls import path
from . import views
from .views import home


urlpatterns = [
    path('/', views.react_view, name='home'),
    path('login/', views.home, name='login'),
    path('logout/', views.logout_user, name='logout'),
    path('register/', views.register_user, name='register'),
    path('model-data/', views.get_model_data, name='model data')
]


