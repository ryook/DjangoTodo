from django.shortcuts import render


def indexView(request):
    return render(request, 'frontends/index.html')