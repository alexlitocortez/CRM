from rest_framework import serializers 
from .models import Record

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = '__all__'




