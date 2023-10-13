from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
# from .forms import SignUpForm
from .models import Record, Contract
from .serializers import PlayerSerializer
from django.http import JsonResponse
from .forms import SignUpForm, AddRecordForm
import pandas as pd
import csv



@csrf_exempt
def home(request):
    records = Record.objects.all()
    # Check to see if logging in
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        # Authenticate
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "You Have Been Logged In!")
            return redirect('home')
        else:
            messages.success(request, "There Was An Error Logging In, Please Try Again...")
            return redirect('home')
    else:
        return render(request, 'home.html', {'records': records})

@csrf_exempt 
def logout_user(request):
    logout(request)
    messages.success(request, "You Have Been Logged Out...")
    return redirect('home')

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
            return redirect('home.html')
    else:
        form = SignUpForm()
        return render(request, 'register.html', {'form': form})
    return render(request, 'register.html', {'form': form})

def player_record(request, pk):
    if request.user.is_authenticated:
        # Look Up Individual Record
        player_record = Record.objects.get(id=pk)
        return render(request, 'record.html', {'player_record': player_record})
    else:
        messages.success(request, "You Must Be Logged In To View That Page...")
        return redirect('home')
    
def delete_record(request, pk):
    if request.user.is_authenticated:
        delete_it = Record.objects.get(id=pk)
        delete_it.delete()
        messages.success(request, "Record Deleted Successfully")
        return redirect('home')
    else:
        messages.success(request, "You Must Be Logged In To Do This...")
        return redirect('home')
    
def add_record(request):
    form = AddRecordForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method == "POST":
            if form.is_valid():
                add_record = form.save()
                messages.success(request, "Record Added...")
                return redirect('home')
        return render(request, 'add_record.html', {'form': form})
    else:
        messages.success(request, "You Must Be Logged In...")
        return redirect('home')

def update_record(request, pk):
    if request.user.is_authenticated:
        current_record = Record.objects.get(id=pk)
        form = AddRecordForm(request.POST or None, instance=current_record)
        if form.is_valid():
            form.save()
            messages.success(request, "Record Has Been Updated!")
            return redirect('home')
        return render(request, 'update_record.html', {'form':form})
    else:
        messages.success(request, "You Must Be Logged In...")
        return redirect('home')


def filtered_table(request):
    selected_option = request.GET.get('filter_option','all')
    selected_option2 = request.GET.get('filter_option2','all')

    filtered_data = Record.objects.all()

    if selected_option != 'all':
        filtered_data = filtered_data.filter(unit=selected_option)

    if selected_option2 != 'all':
        filtered_data = filtered_data.filter(position=selected_option2)

    return render(request, 'filtered_table.html', {'filtered_data': filtered_data, 'selected_option': selected_option, 'selected_option2': selected_option2})


# def read_csv(request):
#     reading_csv = pd.read_csv('/Users/alexcortez/Desktop/projects/CRM/root/backend/csv/49ersSalary.csv')
#     print("reading csv", reading_csv)
#     print("reading csv", reading_csv.columns)


    # return render(request, 'contract.html', {'reading_csv': reading_csv})
    # return JsonResponse(request, 'contract.html', {'reading_csv': reading_csv}, safe=False)

def upload(request):
    return render(request, 'upload.html')

# def upload_csv(request):
#     if request.method == 'POST' and request.FILES('csv_file'):
#         csv_file = request.FILES['csv_file']
#         data = process_csv(csv_file)
#         save_csv_to_database(data)
#         return render(request, 'contract.html', {'data': data})
#     return render(request, 'upload.html')



# def save_csv_to_database(data):
#     for row in data:
#         obj = Contract(field1=row['field1'], field2=row['field2'])
#         obj.save()




def process_uploaded_csv(request):
    if request.method == 'POST' and request.FILES.get('csv_file'):
        csv_file = request.FILES['csv_file']

        # Process the CSV file (e.g., read and process data)
        data = process_csv(csv_file)

        # Save the data to the MySQL database
        for row in data:
            obj = Contract(field1=row['field1'], field2=row['field2'])
            obj.save()

        # You can redirect the user to a success page or return a response as needed
        return HttpResponse("Data uploaded successfully")
    else:
        return HttpResponse("Invalid request or file missing")

def process_csv(csv_file):
    data = []
    reader = csv.DictReader(csv_file)
    for row in reader:
        data.append(row)
    return data
