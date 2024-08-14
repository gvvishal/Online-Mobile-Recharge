from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    
    # Override the 'groups' field
    groups = models.ManyToManyField(
        Group,
        related_name='custom_user_groups',  # Add this line
        blank=True,
        help_text='The groups this user belongs to.',
        related_query_name='user',
    )

    # Override the 'user_permissions' field
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_user_permissions',  # Add this line
        blank=True,
        help_text='Specific permissions for this user.',
        related_query_name='user',
    )