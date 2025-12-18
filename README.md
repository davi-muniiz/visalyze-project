# Visalyze – Dashboard de Vendas com IA

Visalyze é um aplicativo web simples que utiliza **Django** e **Django REST Framework** no backend e **React + TypeScript** no frontend. Ele coleta dados de vendas, gera estatísticas e faz previsões com inteligência artificial, ajudando gestores a tomar decisões baseadas em números concretos.

## Estrutura do projeto

### Backend (Python/Django)

- Modelos e rotas de API usando Django REST Framework.
- Séries de dados de vendas armazenadas no banco PostgreSQL (ou SQLite em desenvolvimento).
- Serviços de IA para cálculo de estatísticas e previsões (regressão linear, ARIMA, etc.).
- Testes unitários com `pytest` e cobertura de código.

### Frontend (React + TypeScript)

- Interface moderna e responsiva com componentes reutilizáveis.
- Consumo da API do Django via `fetch`/`axios`.
- Gráficos dinâmicos (por exemplo, Chart.js ou Recharts) para visualizar vendas, tendências e previsões.
- Gerenciamento de estado simples (Context API ou Redux).

## Principais funcionalidades

| Função                   | Descrição                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------- |
| **Upload de Dados**      | Importar arquivos CSV/XLSX contendo histórico de vendas.                              |
| **Limpeza de Dados**     | Tratamento automático de valores nulos, formatação de datas e normalização de campos. |
| **Dashboard Interativo** | Gráficos de linha, barra e pizza com filtros de período, produto e região.            |
| **Estatísticas**         | Média, mediana, desvio‑padrão, correlações e análises de sazonalidade.                |
| **Previsões**            | Modelos de IA que geram projeções de vendas futuras e métricas de erro (MAE, RMSE).   |
| **Exportação**           | Relatórios em PDF ou CSV.                                                             |
