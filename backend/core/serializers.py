from datetime import datetime
from rest_framework import serializers 
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import auth
from django.contrib.auth.decorators import login_required
from django.contrib.auth.password_validation import validate_password
from .models import Venda

class RegisterUserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True,)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["username", "email", "password", "password2"]

    def validate(self, attrs):
        if attrs['password'] == attrs['password2']:
            return attrs
        else:
            raise serializers.ValidationError(
                {"password": "As senhas não coincidem."}
                )
            
        

    def create(self, validated_data):
        validated_data.pop('password2')
        user = User.objects.create_user(
            **validated_data
        )
        

        return user
    
class ValidateSellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venda
        fields = "__all__"

    
    def validate(self, attrs): 

        if attrs.get('preco') or attrs('precovendido') == 0:
            raise serializers.ValidationError(
                {
                    "preco" : "O valor não pode ser 0.",
                    "precovendido": "O valor não pode ser 0."
                    }

            )
        
        if not attrs.get("produto"):
            raise serializers.ValidationError(
                {"produto": "O produto deve ter um nome."}
            )
        

        
        
        if attrs.get("quantidadevendida") > attrs.get("quantidade"):
            raise serializers.ValidationError(
                {"quantidadevendida": "Quantidade Vendida maior que a Quantidade Adquirida."}
            )        
        
     
        return attrs