from django.urls import path
from .views import UserCrudView

urlpatterns = [
    path('user/', UserCrudView.as_view(), name='user_crud'),  
    path('user/<int:user_id>/', UserCrudView.as_view(), name='user_crud_by_id'), 
]
