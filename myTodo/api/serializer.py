from rest_framework import serializers
from task.models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'name', 'text', 'created_at')


class TaskSearchSerializer(serializers.Serializer):
    keyword = serializers.CharField()

    def validate_keyword(self, keyword):
        if 'fuck' in keyword:
            raise serializers.ValidationError('不適切なキーワードを含んでいます')
        return keyword
