import os
import sys
from datetime import datetime
from pathlib import Path
from random import choice

import django
from django.conf import settings

DJANGO_BASE_DIR = Path(__file__).parent.parent
NUMBER_OF_OBJECTS = 1000

sys.path.append(str(DJANGO_BASE_DIR))
os.environ['DJANGO_SETTINGS_MODULE'] = 'backend.settings'
settings.USE_TZ = False

django.setup()

if __name__ == '__main__':
    from core.models import Venda

    # django_venda = []

    # produtos = ["legumes", "alface", "brocolis", "tomate", "celular"]
    # quantidades = [100, 200, 150, 20, 120]
    # precos = [10, 15, 5, 6, 1000]
    # precosvendidos = [20, 30, 10, 12, 2000]
    # quantidadesvendidas = [65, 70, 100, 23, 120, 13, 12, 22]


    # for i in range(NUMBER_OF_OBJECTS):
    #     choice(produtos)
        
    #     choice(precos)

    #     django_venda.append(
    #         Venda(
    #             produto= choice(produtos),
    #             quantidade= choice(quantidades),
    #             preco= choice(precos),
    #             precovendido = choice(precosvendidos),
    #             quantidadevendida = choice(quantidadesvendidas),
    #             data_venda= "10/10/25"
    #         )
    #     )

    # if len(django_venda) > 0:
    #     Venda.objects.bulk_create(django_venda)