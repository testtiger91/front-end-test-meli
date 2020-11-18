
import React, { useState, useEffect} from "react";
import { useRouteMatch } from 'react-router-dom';

import Item from './Item';

//Vista Resultados de la búsqueda:
function ItemList() {
  const [data, setData] = useState( [{}] ); // Estado que almacena los datos devueltos por la api
  let match = useRouteMatch();  // Obtenemos la ruta y el parametro de busqueda

//Despues de renderizar el componente consultamos la api endpoint (express localhost:5000 - server/index.js)
  useEffect(() => {
    let search = match.params['search'];
    function fetchItems () {
      fetch('/api/items:' + search,{
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
      .then(data => setData(data))
      .catch(error => alert("NO SE HA PODIDO COMUNICAR CON EL SERVIDOR, VERIFIQUE QUE EXPRESS SE ENCUENTRE ACTIVO"));
    }
    fetchItems();
  },[match]);

//Recorremos los datos retornados por /api/items (express localhost:5000 - server/index.js)
//Creamos un componente Item por cada elemento devuelto por la api y lo asiganmos a rows
  const rows  = typeof data.items !==  "undefined" ? data.items.map((item =>
    <Item
    item={item}
    key={item.id}
    />
  ))
   :
  <>
  </>

//Retornamos la lista de items almacenadas en rows
  return (
    <>
      <section className="search-results">
        <ol>
          {rows}
        </ol>
      </section>
    </>
  );

}




export default ItemList;
