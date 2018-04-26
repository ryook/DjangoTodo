from django.conf.urls import url
from.views import indexView


urlpatterns = [
    url(r'^$', indexView, name='front')
]