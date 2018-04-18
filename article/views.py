import requests

from django.shortcuts import render


def get_articles():
    res = requests.get('https://search.dev.n8s.jp/search/v1/article?volume=5')
    return res.json()['hits'][:5]

def article_list(request):

    articles = get_articles()
    return render(request, 'article/top.html', {'articles': articles})