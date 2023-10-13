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
    path('upload/', views.upload, name='upload'),
    # path('upload_csv/', views.upload_csv, name='upload_csv'),
    path('upload-csv/', views.process_uploaded_csv, name='upload_csv'),
    path('process-csv/', views.process_csv, name='process_csv'),
]


