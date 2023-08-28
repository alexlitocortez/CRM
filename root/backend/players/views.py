from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
# from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt 
def home(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        response_data = {'message': 'Data received successfully'}
        response_data_not_successful = {'message': 'Data not retrieved successfully'}
        # Authenticate
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "You Have Been Logged In!")
            return HttpResponse(response_data, status=status.HTTP_200_OK)
        else:
            messages.success(request, "There was An Error Logging In, please try again...")
            return HttpResponse(response_data_not_successful)
    else:
        return render(request, 'home.html')

@csrf_exempt 
def logout_user(request):
    logout(request)
    messages.success(request, "You Have Been Logged Out...")
    return HttpResponse({ 'message': 'Logged out successfully'})
