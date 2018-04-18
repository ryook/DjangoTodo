from django.shortcuts import get_object_or_404, render, redirect
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
            return redirect('task:list')
    else:
        form = TaskForm(instance=task)
    return render(request, 'task/task_detail.html', {'form': form})