# previsualizacion-de-imagenes-con-File-Reader
Previsualización de imágenes con File Reader mediante un input de tipo File

### Por: Paúl Pichón

No les pasa que dan mantenimiento a un proyecto donde en alguna parte deben subir imagenes, pero se dan cuenta que no hay una forma de previsualizar como tal que imagen estan subiendo, bueno les enseñare el script que uso para hacer dicha funcion.

### FileReader() 

El objeto FileReader permite que las aplicaciones web lean ficheros (o información en buffer) almacenados en el cliente de forma asíncrona, usando los objetos File o Blob dependiendo de los datos que se pretenden leer.

### .onloadend()

Un controlador para el evento loadend. Este evento se activa cada vez que  la operación de lecura se ha completado (ya sea con éxito o fallo).

### .readAsDataURL()

Comienza la lectura del contenido del objeto Blob, una vez terminada, el atributo result contiene un data: URL que representa los datos del fichero.

- Basicamente de eso se compone este pequeño script, adicional vienen unas condiciones como el verificar que sea una imagen, o que el peso de la imagen no sea más de 2MB
-Tambien se añade SweetAlert2 para las alertas

Este es el link del proyecto funcionando:
https://paulpichon.github.io/previsualizacion-de-imagenes-con-File-Reader-/
