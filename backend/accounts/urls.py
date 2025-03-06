from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import CustomTokenObtainPairView, UserProfileView, GetUsersView, get_user

urlpatterns = [
    path('profile/', UserProfileView.as_view(), name='user_profile'),  # Protected user profile
    path('users/', GetUsersView.as_view(), name='get_users'),  # Admin-only user list
    path('user/<int:id>/', get_user, name='get_user'),  # Get specific user
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),  # Login (JWT)
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Refresh token
]
