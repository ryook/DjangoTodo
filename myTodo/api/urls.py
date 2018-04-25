from rest_framework import routers
from django.conf.urls import url, include

from .views import TaskListViewSet, TaskSearchView


router = routers.DefaultRouter()
router.register(r'task', TaskListViewSet)

urlpatterns = [
    url(r'search/task', TaskSearchView.as_view(), name='search'),
    url(r'', include(router.urls))
]
