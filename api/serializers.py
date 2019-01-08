from core.models import User, Category, Expense
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'groups')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class ExpenseSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    amount = serializers.FloatField()
    date = serializers.DateField()
    class Meta:
        model = Expense
        fields = ('id', 'amount', 'category', 'date', 'note', 'created', 'modified')