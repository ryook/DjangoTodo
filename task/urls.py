from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.task_list, name='task_list')
]