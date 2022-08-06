import './App.css';
import NavBar from './Components/NavBar';
// import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <>
    <NavBar />
    {/* <ItemListContainer greeting='CoderHouse' /> */}
    <ItemDetailContainer greeting='CoderHouse' />
    </>
  );
}

export default App;