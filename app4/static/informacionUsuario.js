function cargarInformacionTarea(idTarea)
{
    console.log("Se cargara la informacion de la tarea %s",idTarea)
    fetch(`/conseguirInfoTarea?idTarea=${idTarea}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.comentariosTotales)
        nombreTareaDetalle = document.getElementById('nombreTareaDetalle')
        fechaInicioDetalle = document.getElementById('fechaInicioDetalle')
        fechaFinDetalle = document.getElementById('fechaFinDetalle')
        estadoTareaDetalle = document.getElementById('estadoTareaDetalle')
        descripcionTareaDetalle = document.getElementById('descripcionTareaDetalle')
        indTarea = document.getElementById('indTarea')
        comentariosTareaTotales = document.getElementById('comentariosTareaTotales')

        nombreTareaDetalle.value = ''
        fechaInicioDetalle.value = ''
        fechaFinDetalle.value = ''
        estadoTareaDetalle.value = ''
        descripcionTareaDetalle.value = ''
        indTarea.innerHTML = ''
        comentariosTareaTotales.innerHTML = ''
        
        nombreTareaDetalle.value = data.nombreTarea
        fechaInicioDetalle.value = data.fechaInicio
        fechaFinDetalle.value = data.fechaFin
        estadoTareaDetalle.value = data.estadoTarea
        descripcionTareaDetalle.value = data.descripcionTarea
        indTarea.innerHTML = data.idTarea

        for(let j = 0; j < data.comentariosTotales.length; j++)
        {
            seccionComentario = `
            <div class="row mb-3">
                <div class="col-3">
                    ${data.comentariosTotales[j][0]}
                </div>
                <div class="col-9">
                    ${data.comentariosTotales[j][1]}
                </div>
            </div>
            `
            comentariosTareaTotales.innerHTML = comentariosTareaTotales.innerHTML + seccionComentario
        }

    })
}

function enviarComentario()
{
    url = '/publicarComentario'
    datos = {
        'comentario':document.getElementById('comentarioUsuario').value,
        'idTarea':document.getElementById('indTarea').innerHTML
    }
    fetch(url,
    {
        method:"POST",
        headers:
        {
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body:JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        cargarInformacionTarea(document.getElementById('indTarea').innerHTML)
        document.getElementById('comentarioUsuario').value = ''
    })
}


function getCookie(name)
{
    let cookieValue = null;
    if (document.cookie && document.cookie !== "")
    {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++)
        {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + "="))
            {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function cargarInformacionUsuario(idUsuario)
{
    /*
    PREGUNTA 3
    Desarrollar la función de javascript que permita consultar la ruta
    obtenerDatosUsuario?idUsuario=${idUsuario}
    Revisar la implementacion realizada en clase para el detalle de las
    tareas.
    */
    console.log("Se cargara la informacion del usuario %s",idUsuario)
    fetch(`obtenerDatosUsuario?idUsuario=${idUsuario}`)
    .then(response => response.json())
    .then(data => {
        usernameUsuarioEdit = document.getElementById('usernameUsuarioEdit')
        nombreUsuarioEdit = document.getElementById('nombreUsuarioEdit')
        apellidoUsuarioEdit = document.getElementById('apellidoUsuarioEdit')
        profesionUsuarioEdit = document.getElementById('profesionUsuarioEdit')
        emailUsuarioEdit = document.getElementById('emailUsuarioEdit')
        nroCelularEdit = document.getElementById('nroCelularEdit')
        perfilUsuarioEdit = document.getElementById('perfilUsuarioEdit')
        idUsuarioEdit = document.getElementById('idUsuario')

        usernameUsuarioEdit.value = ''
        nombreUsuarioEdit.value = ''
        apellidoUsuarioEdit.value = ''
        profesionUsuarioEdit.value = ''
        emailUsuarioEdit.value = ''
        nroCelularEdit.value = ''
        perfilUsuarioEdit.value = ''
        idUsuarioEdit.value = ''
        
        usernameUsuarioEdit.value = data.username
        nombreUsuarioEdit.value = data.first_name
        apellidoUsuarioEdit.value = data.last_name
        profesionUsuarioEdit.value = data.profesionUsuario
        emailUsuarioEdit.value = data.email
        nroCelularEdit.value = data.nroCelular
        perfilUsuarioEdit.value = data.perfilUsuario
        idUsuarioEdit.value = idUsuario
    })
}