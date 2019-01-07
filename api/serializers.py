from core.models import User, Category, Expense
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'first_name', 'last_name', 'email', 'groups')


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class ExpenseSerializer(serializers.HyperlinkedModelSerializer):
    category = serializers.StringRelatedField()
    class Meta:
        model = Expense
        fields = ('id', 'amount', 'category', 'date', 'note', 'created', 'modified')