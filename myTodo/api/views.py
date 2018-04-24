from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import TaskSerializer, TaskSearchSerializer
from task.models import Task


class TaskListViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskSearchView(APIView):
    http_method_names = ['get']

    def get(self, request):
        serializer = TaskSearchSerializer(data=request.GET)
        serializer.is_valid(raise_exception=True)

        keyword = serializer.validated_data['keyword']
        tasks = list(Task.objects.filter(name__contains=keyword).values())
        return Response(status=200, data=tasks)
