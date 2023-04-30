from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Players
from .serializers import PlayerSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


# Create your views here.

@api_view(['GET'])
def say_hello(request):
    return HttpResponse('Hello World')

@api_view(['GET', 'POST'])
def player_list(request):
    
    if request.method == 'GET':
        players = Players.objects.all()
        serializer = PlayerSerializer(players, many=True)
        return JsonResponse({ 'Players': serializer.data })

    if request.method == 'POST':
        serializer = PlayerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    

@api_view(['GET', 'PUT', 'DELETE'])
def player_detail(request, id):
    
    try:
        player = Players.objects.get(pk=id)
    except Players.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = PlayerSerializer(player)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PlayerSerializer(player, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        player.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



