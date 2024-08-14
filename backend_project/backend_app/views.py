from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.exceptions import NotFound

class UserCrudView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        
        action = request.data.get('action')
        
        if action == 'register':
            return self.register(request)
        elif action == 'login':
            return self.login(request)
        else:
            return Response({'error': 'Action parameter is required and must be "register" or "login".'}, status=status.HTTP_400_BAD_REQUEST)

    def register(self, request):
        # Handle user registration (Create)
        first_name = request.data.get('firstName')
        last_name = request.data.get('lastName')
        email = request.data.get('email')
        password = request.data.get('password')

        if not (first_name and last_name and email and password):
            return Response({'error': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=email).exists():
            return Response({'error': 'User with this email already exists.'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(
            username=email,
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
        )

        return Response({'message': 'Registration successful'}, status=status.HTTP_201_CREATED)

    def login(self, request):
        # Handle user login
        email = request.data.get('email')
        password = request.data.get('password')

        if not (email and password):
            return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, username=email, password=password)
        
        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    def get(self, request, user_id=None):
        # Handle retrieving user details by ID
        if user_id is not None:
            try:
                user = User.objects.get(id=user_id)
                data = {
                    'firstName': user.first_name,
                    'lastName': user.last_name,
                    'email': user.email,
                }
                return Response(data, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                raise NotFound('User not found')
        return Response({'error': 'User ID parameter is required'}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, user_id=None):
        # Handle updating user details by ID
        if user_id is not None:
            try:
                user = User.objects.get(id=user_id)
                first_name = request.data.get('firstName', user.first_name)
                last_name = request.data.get('lastName', user.last_name)
                password = request.data.get('password')

                if password:
                    user.set_password(password)

                user.first_name = first_name
                user.last_name = last_name
                user.save()

                return Response({'message': 'User updated successfully'}, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                raise NotFound('User not found')
        return Response({'error': 'User ID parameter is required'}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, user_id=None):
        # Handle deleting a user by ID
        if user_id is not None:
            try:
                user = User.objects.get(id=user_id)
                user.delete()
                return Response({'message': 'User deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
            except User.DoesNotExist:
                raise NotFound('User not found')
        return Response({'error': 'User ID parameter is required'}, status=status.HTTP_400_BAD_REQUEST)