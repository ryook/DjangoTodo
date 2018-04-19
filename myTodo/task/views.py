from django.http import Http404
from django.shortcuts import render, redirect

from .models import Task
from .forms import TaskForm

def task_list(request):
    tasks = Task.objects.all().order_by('created_at')
    return render(request, 'task/task_list.html', {'tasks': tasks})


def task_detail(request, task_id):
    task = Task.objects.get(pk=task_id)

    if request.method == 'POST':
        form = TaskForm(data=request.POST, instance=task)
        if form.is_valid():
            form.save()
            return redirect('task:list')
    else:
        form = TaskForm(instance=task)
    return render(request, 'task/task_detail.html', {'form': form})


def task_new(request):

    if request.method == 'GET':
        form = TaskForm()
        return render(request, 'task/task_detail.html', {'form': form})
    else:
        form = TaskForm(request.POST)
        form.is_valid()
        form.save()
        return  redirect('task:list')


def task_delete(request, task_id):

    if request.method == 'POST':
        try:
            Task.objects.get(pk=task_id).delete()
            return redirect('task:list')
        except Task.DoesNotExist:
            raise Http404
