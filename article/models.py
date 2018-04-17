from django.db import models
from django.utils import timezone


class Article(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    kiji_id = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.title
