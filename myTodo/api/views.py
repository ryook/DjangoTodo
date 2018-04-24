from rest_framework import viewsets
from .serializer import TaskSerializer
from task.models import Task


class TaskListViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
