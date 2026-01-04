from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets
from .serializers import RegisterUserSerializer
from django.contrib.auth.models import User
import pandas as pd
# Create your views here.


@api_view(['GET'])
def hello(request):
    print("Hello Api called")
    return Response({"message": "Hello, world!"})
    


@api_view(["POST"])
def csv_config(request):
        file = request.FILES["file"]

        print("Files:", request.FILES)
        print("DATA:", request.data)

        dictfile = pd.read_csv(file).to_dict()
        print(dictfile)
        
        return Response(dictfile)


class RegisterUserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = RegisterUserSerializer
