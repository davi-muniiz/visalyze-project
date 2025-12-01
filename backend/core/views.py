from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets
from .models import Venda
from .serializers import ValidateSellSerializer, RegisterUserSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
# Create your views here.


@api_view(['GET'])
def hello(request):
    print("Hello Api called")
    return Response({"message": "Hello, world!"})
    

class RegisterUserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = RegisterUserSerializer

class ProductCreaterView(viewsets.ModelViewSet):
    queryset = Venda.objects.all()
    serializer_class = ValidateSellSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        return Venda.objects.filter(user=self.request.user)
    