# Test Práctico - Frontend

**Nota: se debe inicializar el servidor de Express que se encuentra en la carpeta  `/server` para atender las peticiones del lado del cliente.**

## Componentes

La aplicación este compuesta por 4 componentes almacenados en la carpeta /src/components

## `ItemsSearch`

Caja de busqueda asociada a la ruta '/'.
Renderiza el formulario que toma el valor ingresado por el usuario y la envia el componente `ItemsList`.

## `ItemsList`

Resultado de la búsqueda asociada a la ruta '/items:search'.
Toma el valor enviado por `ItemsSearch` y consulta la api endpoint /api/items (server/index.js).
Renderiza los datos devueltos por la api creando un componente 'Item' por cada elemento devuelto por la api.

## `Item`

Representa un producto de la lista.
Asocia un Link al detalle del producto por su ID.

### `ItesmDescription`

Detalle del producto asociada a la ruta '/items/:id'.
A partir de un ID de producto consulta la api endpoint /api/items/:id (server/index.js).
Renderiza los datos devueltos por la api mostrando los detalles del producto.



**Note: Cada componente (expecto Item) puede ser navegado independientemente ingresado su url y el parametro correspondiente.**
