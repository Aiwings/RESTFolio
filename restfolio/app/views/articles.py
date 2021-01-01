from rest_framework import generics, permissions
from ..models import Article
from ..serializers import ArticleSerializer
from ..permissions import isAuthorOrReadOnly


class ArticleListC(generics.ListCreateAPIView):
    """Article List Create
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class ArticleRetrU(generics.RetrieveUpdateDestroyAPIView):
    """ Article READ UPDATE
    """
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly, isAuthorOrReadOnly]
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
