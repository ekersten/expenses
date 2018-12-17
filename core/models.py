import binascii
import os

from django.db import models
from django.contrib.auth.models import AbstractUser

from model_utils.models import TimeStampedModel

# Create your models here.
class User(AbstractUser):
    token = models.CharField(max_length=40)

    def save(self, *args, **kwargs):
        if not self.token:
            self.token = binascii.hexlify(os.urandom(20)).decode()
        return super().save(*args, **kwargs)


class Category(TimeStampedModel):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, related_name='categories', on_delete=models.deletion.CASCADE)

    def __str__(self):
        return self.name


class Expense(TimeStampedModel):
    amount = models.DecimalField(max_digits=7, decimal_places=2)
    category = models.ForeignKey(Category, related_name='expenses', on_delete=models.deletion.SET_NULL, null=True)
    date = models.DateField()
    note = models.TextField()
    user = models.ForeignKey(User, related_name='expenses', on_delete=models.deletion.CASCADE)

    def __str__(self):
        return '%s %s %s'.format(self.amount, self.category.name, self.date)
