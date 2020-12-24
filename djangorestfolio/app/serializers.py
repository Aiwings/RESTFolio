from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Block, Article


class BlockSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Block
        fields = ['slug', 'content', 'name']


class UserSerializer(serializers.HyperlinkedModelSerializer):
    articles = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Article.objects.all())

    class Meta:
        model = User
        fields = ["url", "id", "username", "articles"]


class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Article
