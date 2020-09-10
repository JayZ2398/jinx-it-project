from rest_framework import serializers
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from .models import Account


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        # Hide passwords from plain sight when viewing users
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class AccountSerializer(serializers.HyperlinkedModelSerializer):
    # Serialize the associated user (rather than just returning the primary key for the account's user)
    user = UserSerializer()

    class Meta:
        model = Account
        fields = ['first_name', 'last_name', 'email', 'user']