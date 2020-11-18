import { Link } from 'react-router-dom';

//Componete que representa cada item
function Item (item) {
  const dataItem = item.item;
  const shipping  = dataItem.free_shipping ?
  <span className="shipping"></span>
  :
  <></>


  return (
    <Link title={dataItem.title} to={`items/${dataItem.id}`}>
      <li className="search-item">
        <div className="card-item columns">
          <div className="image-item columns__item">
            <img className="image" width="160" height="160" alt={dataItem.title} src={dataItem.picture} />
          </div>
        <div className="price-item columns__item">
          $ {dataItem.price.price}
          {shipping}
        </div>
        <div className="title-item columns__item">
          <h2>{dataItem.title}</h2>
        </div>
        <div className="address-item columns__item">
          <p>{dataItem.state_name}</p>
        </div>
      </div>
     </li>
    </Link>
  );
}

export default Item;
