from django.conf.urls import url
from . import views


app_name = 'task'
urlpatterns = [
    url(r'^$', views.task_list, name='list'),
    url(r'^task/(?P<task_id>[0-9]+)$', views.task_detail, name='detail'),
]