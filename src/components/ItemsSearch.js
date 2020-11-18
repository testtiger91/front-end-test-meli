import React, { useState} from "react";
import { withRouter,useHistory } from 'react-router';

//Vista Caja de Búsqueda
function SearchBox() {
  const [query, setQuery] = useState(''); //Estado que almacena el valor ingresado por el usuario
  const history = useHistory() //Acesso al historial utilizado para navegar  y redireccionar al enviar el formulario

  function handleInputChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    if(query.length > 0){
      history.push("/items:" + query)
    }
  }

  return (
  <>
    <header className="nav-header">
      <div className="">
        <span href="#" className="nav-logo"></span>
        <form className="nav-search-form" onSubmit={handleSubmitForm}>
          <input className="nav-input-search" placeholder="Nunca dejes de buscar" value={query} onChange={handleInputChange} />
          <button className="nav-submit-button" type="submit">
            <div role="img" aria-label="Buscar" className="nav-icon-search"></div>
          </button>
        </form>
      </div>
    </header>
 </>

  );
}

export default withRouter(SearchBox);
