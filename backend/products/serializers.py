from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class ProductSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)  # Nested User info

    class Meta:
        model = Product
        fields = '__all__'  # Serializes all fields
