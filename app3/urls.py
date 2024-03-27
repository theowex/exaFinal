from django.urls import path
from . import views

app_name='app3'

urlpatterns = [
    path('',views.index,name='index'),
    path('nuevoUsuario',views.nuevoUsuario,name='nuevoUsuario')
]