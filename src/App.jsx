/* import logo from './logo.svg'; */
import './App.css';
import NavBar from './components/Navbar/NavBar';
//import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/' element={""}> </Route>
          <Route path='/Monitors' element={""}> </Route>
          <Route path='/Keyboards' element={""}> </Route>
          <Route path='/Mousepads' element={""}> </Route>
          <Route path='/Mouse' element={""}> </Route>


        </Routes>
      </BrowserRouter>

      <ItemListContainer greeting="Productos" />
      <ItemDetailContainer />
      {/*     
      <h1>Contador</h1>
      //<Contador inicial={1} stock={10}/>
    <Contador inicial={4} stock={8}/> */}

    </>

  );
}

export default App;
