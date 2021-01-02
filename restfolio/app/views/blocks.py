from rest_framework import generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from ..models import Block
from ..serializers import BlockSerializer


class BlockListC(generics.ListCreateAPIView):
    """ Perform List /Create Block opérations
    """
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Block.objects.all()
    serializer_class = BlockSerializer


class BlockRetrU(generics.RetrieveUpdateDestroyAPIView):
    """ Perform Retrieve Update Block Operation
    """
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Block.objects.all()
    serializer_class = BlockSerializer
