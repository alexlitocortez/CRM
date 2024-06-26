from django.urls import path
from . import views
from django.views.generic import TemplateView


urlpatterns = [
    path('', views.home, name='home'),
    path('logout/', views.logout_user, name='logout'),
    path('register/', views.register_user, name='register'),
    path('record/<int:pk>', views.player_record, name='record'),
    path('delete_record/<int:pk>', views.delete_record, name='delete_record'),
    path('add_record/', views.add_record, name='add_record'),
    path('update_record/<int:pk>', views.update_record, name='update_record'),
    path('filtered_table/', views.filtered_table, name='filtered_table'),
    path('salaries/', views.salaries, name='salaries'),
    path('salary/<int:pk>', views.player_salary, name='salary'),
    path('add_salaries/', views.add_salaries, name='add_salaries'),
    path('update_salary/<int:pk>', views.update_salary, name='update_salary'),
    path('delete_salary/<int:pk>', views.delete_salary, name='delete_salary'),
]


