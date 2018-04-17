from django.shortcuts import render
from .models import Article


def article_list(request):
    articles = Article.objects.all()
    return render(request, 'article/top.html', {'articles': articles})