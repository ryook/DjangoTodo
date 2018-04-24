from rest_framework import routers

from .views import TaskListViewSet


router = routers.DefaultRouter()
router.register(r'task', TaskListViewSet)