from core.models import User, Category, Expense
from rest_framework import viewsets
from api.serializers import UserSerializer, CategorySerializer, ExpenseSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allos users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allos categories to be viewed or edited.
    """
    serializer_class = CategorySerializer

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return self.request.user.categories.all()
        else:
            return Category.objects.none()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ExpenseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allos expenses to be viewed or edited.
    """
    serializer_class = ExpenseSerializer

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return self.request.user.expenses.all()
        else:
            return Expense.objects.none()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
