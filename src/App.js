/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Productos"/>
      {/*     
      <h1>Contador</h1>
      //<Contador inicial={1} stock={10}/>
    <Contador inicial={4} stock={8}/> */}

    </>
     
  );
}

export default App;
