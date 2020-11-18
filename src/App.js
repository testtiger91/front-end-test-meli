import { Route } from 'react-router-dom';

import SearchBox from './components/ItemsSearch';
import ItemList from './components/ItemsList';
import ItemsDescription  from './components/ItemsDescription';

function App() {
  return (
   <>
     <Route path="/">
       <SearchBox />
     </Route>
     <Route path="/items:search">
       <ItemList />
     </Route>
     <Route path="/items/:id">
       <ItemsDescription />
     </Route>
   </>
  );
}

export default App;
