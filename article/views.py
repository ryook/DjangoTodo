from django.shortcuts import render
from .models import Article


def get_articles():
    # import requests/
    # res = requests.get('http://search.dev.n8s.jp', )
    # APIGW経由
    res = [
        {
            "title": "search1",
            "body": "body1",
            "kiji_id": "s1"
        },
        {
            "title": "search2",
            "body": "body2",
            "kiji_id": "s2"
        },
        {
            "title": "search3",
            "body": "body3",
            "kiji_id": "s3"
        }
    ]
    return res

def article_list(request):

    articles = get_articles()
    return render(request, 'article/top.html', {'articles': articles})