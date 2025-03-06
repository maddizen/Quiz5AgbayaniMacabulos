from django.urls import path
from .views import get_products, get_product

urlpatterns = [
    path('products/', get_products, name='get_products'),
    path('product/<int:id>/', get_product, name='get_product'),
]
