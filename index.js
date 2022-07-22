/******************************************************************************/
/****  Este Script permite previsualizar                                    ***/
/****   imágenes cargadas con el input file de HTML5                        ***/
/****          mediante "FileReader"                                        ***/
/****          Por: Paúl Pichón                                             ***/
/******************************************************************************/

/******************************************************************************
El objeto FileReader permite que las aplicaciones web lean ficheros 
(o información en buffer) almacenados en el cliente de forma asíncrona, usando los
objetos File o Blob dependiendo de los datos que se pretenden leer.

Referencia ---> https://developer.mozilla.org/es/docs/Web/API/FileReader
*****************************************************************************/

//input file del html
const subirImagen = document.querySelector('#subirImagen');
//area donde seran insertadas la imágenes a previsualizar
const previsualizacion = document.querySelector('.previsualizacion');
//Array donde seran almacenados temporalmente
let archivos = [];

//cargar eventListener()
eventListener();

function eventListener() {
    //añadimos addEventListener a nuestro input subirImagen
    subirImagen.addEventListener('change', previsualizarImagenes);
}

//función para poder previsualizar las imágenes cargadas en el input file
function previsualizarImagenes( e ) {
    //creamos un array con los archivos que vienen del input
    archivos = [ ...e.target.files ];
   
    //recorremos el arreglo archivos
    archivos.map( img => {

        //OPCIONAL ---> se puede quitar este if()
        //verificamos que sean solo imágenes las que se van a subir(.jpeg, .png)
        if ( /\.(jpe?g|png)$/i.test(img.name) ) {
            
            //OPCIONAL ---> se puede quitar este if()
            //verificamos el tamaño de las imágenes
            //en este ejemplo el maximo es de 2MB( 2000000 )
            if ( img.size <= 2000000) {
            
                //console.log( index, img );
                const reader = new FileReader();
                //verificamos si viene un archivo
                if (  subirImagen) {

                    //obtenemos informacion de la imagen
                    //readAsDataURL() ---> Comienza la lectura del contenido del objeto Blob, una vez terminada, el atributo result contiene un data: URL que representa los datos del fichero.
                    reader.readAsDataURL( img );
                    
                    //onloadend ---> Un controlador para el evento loadend. Este evento se activa cada vez que  la operación de lecura se ha completado (ya sea con éxito o fallo).
                    reader.onloadend = function () {
                        //creamos un div donde que sera el contenedor de la imagen
                        const contenedorImgPrevisualizar = document.createElement('div');
                        //agregamos estilos al div creado
                        contenedorImgPrevisualizar.classList.add('col-md-4', 'mb-3');
                        //insertamos la imagen subida al contenedor creado
                        contenedorImgPrevisualizar.innerHTML = `
                            <img class="w-100 h-100" src="${ reader.result } " alt="${ img.name }">
                        `;
                        //renderizamos el contenedor con la imagen en el html
                        previsualizacion.appendChild( contenedorImgPrevisualizar );

                    }
                    //Cabe mencionar que readAsDataURL() hara que el src de la imágen aparezca como un blob(), es decir estara en base64(), ocultando(Codificando), por asi decirlo el origen de la imágen.
                }
            
            }else{
                
                //se muestra de alerta de peso de imagen excedido
                Swal.fire({
                    title: "¡Cuidado!",
                    text: `¡Solo se permiten imágenes de maximo 2MB cada una!`,
                    icon: 'warning',
                    confirmButtonText: 'Entendido',
                    allowOutsideClick: false,
                    allowEscapeKey: false
                }).then(function()
                {
                    document.location.href="index.html";
                });

            }


        } else {
            //se muestra alerta en caso de que no sea una imágen
            Swal.fire({
                title: '¡Error!',
                text: 'Solo puedes subir imágenes(.jpeg, .png)',
                icon: 'error',
                confirmButtonText: 'Entendido',
                allowOutsideClick: false,
                allowEscapeKey: false
            }).then(function()
            {
                document.location.href="index.html";
            });
            
        }
  
    });
}