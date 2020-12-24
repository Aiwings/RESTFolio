from django.db import models

from django.conf import settings


class Block(models.Model):
    """
    Single Page Block
    """
    name = models.CharField(max_length=50)
    slug = models.SlugField(blank=True)
    content = models.TextField()


class Image(models.Model):
    """
    Global Image
    """
    name = models.CharField(max_length=30)
    alternate_text = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    image = models.ImageField(upload_to='media/%Y/%m/%d/')


class Category(models.Model):
    """
    Blog Category
    """
    name = models.CharField(max_length=30)
    slug = models.SlugField(blank=True)
    description = models.CharField(max_length=255)
    parent = models.ForeignKey(
        'self', blank=True, null=True,
        related_name='children',
        on_delete=models.CASCADE
    )

    class Meta:
        unique_together = ('slug', 'parent',)
        verbose_name_plural = "categories"


class Page(models.Model):
    """
    Page Declaration
    """
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=255)
    content = models.TextField()
    slug = models.SlugField(blank=True)


class Article(Page):
    """
    Article Page
    """
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    category = models.ManyToManyField(Category)
    publication_date = models.DateField()
