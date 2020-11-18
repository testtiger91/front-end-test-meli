import {useRouteMatch} from "react-router-dom";
import React, { useState, useEffect} from "react";

//Vista Detalle del producto:
function ItemsDescription() {
  const [data, setData] = useState([{}]); // Estado que almacena los datos devueltos por la api
  const [isBussy, setIsBussy] = useState(true); // Estado booleano que maneja el tiempo de espera de retorno de la api para renderizar el detalle del producto
  let match = useRouteMatch(); // Obtenemos la ruta y el id del producto

//C onsultamos la api endpoint (express localhost:5000 - server/index.js) para obtener los datos y descripcion del producto
  useEffect(() => {
    const id = match.params['id'];
    function fetchItemById () {
      fetch('/api/items/' + id,{
        method : 'GET',
        headers: {
          "Accept": "application/json"
        }
      })
      .then(response => {
       if(!response.ok) throw Error(response.status);
        return response;
      })
      .then(res => res.json())
      .then(data =>setData(data))
      .then(data => setIsBussy(false))
      .catch(error => alert("NO SE HA PODIDO COMUNICAR CON EL SERVIDOR, VERIFIQUE QUE EXPRESS SE ENCUENTRE ACTIVO"));
    }
    fetchItemById();
  }, [match]);


// Renderizamos el componete a partir de los datos devueltos  api  /api/items/:id (express localhost:5000 - server/index.js)
  return(
    !isBussy ?
    typeof data.item != "undefined" ?
    <div className="description-container-item">
      <div className="description-image-item">
        <figure>
         <img alt={data.item.title} src={data.item.picture}/>
        </figure>
      </div>
      <div className="description-data-item">
        <div className="description-title-item">
          <h1>{data.item.title}</h1>
        </div>
      <div className="description-price-item">
        <h1>$ {data.item.price.price}</h1>
      </div>
      <div className="description-button-item">
        <button>
          <span>Comprar</span>
        </button>
      </div>
     </div>
     <div className="description-description-item">
      <h2>Descripción del producto</h2>
      <p>{data.item.description}</p>
     </div>
    </div>
    :
    <h1>No se encontraron resultados para la busqueda</h1>
    : false
    )
}

export default ItemsDescription;
