from rest_framework import generics, permissions
from ..models import Block
from ..serializers import BlockSerializer


class BlockListC(generics.ListCreateAPIView):
    """ Perform List /Create Block opérations
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Block.objects.all()
    serializer_class = BlockSerializer


class BlockRetrU(generics.RetrieveUpdateDestroyAPIView):
    """ Perform Retrieve Update Block Operation
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Block.objects.all()
    serializer_class = BlockSerializer
