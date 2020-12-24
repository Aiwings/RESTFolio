from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('block/<str:slug>', views.BlockRetrU.as_view(), name="block-detail"),
    path('blocks/', views.BlockListC.as_view(), name="block-list"),

    path('user/<int:id>', views.UserDetail.as_view(), name="user-detail"),
    path('users/', views.UserList.as_view(), name="user-list"),

    path('article/<int:id>', views.ArticleRetrU.as_view(), name="article-detail"),
    path('articles/', views.ArticleListC.as_view(), name="article-list")
]
urlpatterns = format_suffix_patterns(urlpatterns)
