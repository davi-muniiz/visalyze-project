from django.db import models
from django.conf import settings
import datetime

# Create your models here.

class Venda(models.Model):
    produto = models.CharField(max_length=100)
    quantidade = models.IntegerField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    precovendido = models.DecimalField(max_digits=10, decimal_places=2)
    quantidadevendida = models.IntegerField()
    data_venda = models.DateField(default=datetime.date.today)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="vendas")

    def __str__(self):
        return f"{self.produto} - {self.quantidade} unidades - R${self.preco}"
    
