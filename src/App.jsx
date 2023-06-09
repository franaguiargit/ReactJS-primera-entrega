/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/Navbar/NavBar';
//import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>

            <Route path='/' element={<ItemListContainer greeting="Productos" />}> </Route>
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />}> </Route>
            <Route path='/item/:idItem' element={<ItemDetailContainer />}> </Route>
            <Route path='*' element={<h2> Web en desarrollo </h2>}></Route>
            <Route path='/cart' element = {<Cart/>}></Route>
            <Route path='/Mousepads' element={""}> </Route>
            <Route path='/Mouse' element={""}> </Route>

          </Routes>
        </CarritoProvider>
      </BrowserRouter>


      {/*     
      <h1>Contador</h1>
      //<Contador inicial={1} stock={10}/>
    <Contador inicial={4} stock={8}/> */}

    </>

  );
}

export default App;
