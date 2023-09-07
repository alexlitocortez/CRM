from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse
# from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from .forms import SignUpForm
from .models import Record
from .serializers import PlayerSerializer
from django.http import JsonResponse


def react_view(request):
    return render(request, 'records.tsx')

@csrf_exempt 
def home(request):
    records = Record.objects.all()
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        response_data = {'message': 'Data received successfully'}
        Response("You have been logged in successfully")
        # Authenticate
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "You Have Been Logged In!")
            return HttpResponse(response_data, status=status.HTTP_200_OK)
        else:
            messages.success(request, "There was An Error Logging In, please try again...")
            return HttpResponse("login not successful!")
    else:
        return render(request, 'home.html', {'records': records})

@csrf_exempt 
def logout_user(request):
    logout(request)
    messages.success(request, "You Have Been Logged Out...")
    return HttpResponse({ 'message': 'Logged out successfully'})

@csrf_exempt 
def register_user(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            # Authenticate and login
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username=username, password=password)
            login(request, user)
            messages.success(request,"You Have Successfully Registered")
            # return HttpResponse(request, 'homeLayout.tsx')
            return HttpResponse("You're registered")
    else:
        form = SignUpForm()
        # return render(request, 'register.tsx', {'form': form})
        return HttpResponse("You're not registered")
    
    return render(request, 'homeLayout.tsx', {'form': form})

@csrf_exempt 
def get_model_data(request):
    if request.method == 'GET':
        model_data = Record.objects.all()
        serializer = PlayerSerializer(model_data, many=True)
        formatted_data = [
            {
                'created_at': player['created_at'],
                'first_name': player['first_name'],
                'last_name': player['last_name'],
                'email': player['email'],
                'phone': player['phone']
            }
            for player in serializer.data
        ]
        # return HttpResponse(formatted_data)
        return JsonResponse(formatted_data, safe=False)
    else:
        return

def customer_record(request, pk):
     if request.user.is_authenticated:
        #   Look up Records
        customer_record = Record.objects.get(id=pk)
        return render(request, 'home.html', {'customer_record': customer_record})
     else:
        messages.success(request, "You must be logged in to view that page...")
        return redirect('home')


@api_view(['POST'])
def delete_record(request, pk):
    if request.user.is_authenticated:
        delete_it = Record.objects.get(id=pk)
        delete_it.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)



