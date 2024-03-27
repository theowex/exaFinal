from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse

lista_personas = [
    ['Alexander','Segovia','24-01-1997','Estudiante'],
    ['Javier','Hilario','25-01-1992','Egresado'],
    ['Martin','Leyva','13-06-1998','Estudiante'],
]

# Create your views here.
def index(request):
    return render(request,'index.html',{
        'lista_personas':lista_personas
    })

def nuevoUsuario(request):
    if request.method == 'POST':
        print(request.POST)
        nombre = request.POST.get('nombre')
        apellido = request.POST.get('apellido')
        fechaNacimiento = request.POST.get('fecha')
        print(nombre)
        print(apellido)
        print(fechaNacimiento)
        lista_personas.append([nombre,apellido,fechaNacimiento,'Estudiante'])
        return HttpResponseRedirect(reverse('app3:index'))
    return render(request,'nuevoUsuario.html')