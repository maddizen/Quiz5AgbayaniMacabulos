from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import UserSerializer, CustomTokenObtainPairSerializer, UserProfileSerializer


# ✅ Custom JWT Token View
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


# ✅ Function-Based View: Get a specific user
@api_view(['GET'])
def get_user(request, id):
    try:
        user = User.objects.get(id=id)
        serializer = UserSerializer(user)
        return Response(serializer.data)
    except User.DoesNotExist:
        return Response({"error": "User not found"}, status=404)


# ✅ Class-Based View: Get all users (Admin only)
class GetUsersView(APIView):
    permission_classes = [IsAdminUser]  # Only Admins can access this

    def get(self, request):
        users = User.objects.all()
        serializer = UserProfileSerializer(users, many=True)
        return Response(serializer.data)


# ✅ Class-Based View: Get user profile (Authenticated users only)
class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]  # Only logged-in users can access their profile

    def get(self, request):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data)
