from rest_framework import permissions


class isAuthorOrReadOnly(permissions.BasePermission):
    """
    Only the author can update Blogs
    """

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.author == request.user
