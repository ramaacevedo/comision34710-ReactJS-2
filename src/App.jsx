import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';
import ItemList from './Components/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting='CoderHouse' />
    <ItemCount stock={10} initial={1} />
    </>
  );
}

export default App;