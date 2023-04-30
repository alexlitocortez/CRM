from rest_framework import serializers 
from .models import Players

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Players
        fields = ('id', 'name', 'description')


