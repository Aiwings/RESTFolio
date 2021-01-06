from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Block, Article


class BlockSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for Block Model
    """
    class Meta:
        model = Block
        fields = ['slug', 'content', 'name']
        lookup_field = 'slug'


class UserSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for user model
    """
    articles = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Article.objects.all())

    class Meta:
        model = User
        fields = ["url", "id", "username", "articles"]


class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for Articles model
    """
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Article
