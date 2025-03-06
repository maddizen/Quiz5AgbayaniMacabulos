from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/accounts/', include('accounts.urls')),  # Include accounts URLs
    path('api/products/', include('products.urls')),  # Include products URLs
]
