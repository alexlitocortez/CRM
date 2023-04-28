from rest_framework import serializers 
from .models import Players

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Players
        fields = ('first_name', 'last_name')


