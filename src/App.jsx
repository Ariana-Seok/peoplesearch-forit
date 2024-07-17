import './App.css';
import { useEffect, useState } from 'react';
import { TbUserSearch } from "react-icons/tb";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import SearchBar from './components/searchBar/SearchBar';
import Footer from './components/footer/footer';

function App() {
  const [ usuarios, setUsuarios ] = useState([]);
  const [ apiUsuarios, setApiUsuarios ] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchApiData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setApiUsuarios(data);
    };

  const usuariosGuardados = localStorage.getItem("usuarios");

  if (usuariosGuardados) {
    setUsuarios(JSON.parse(usuariosGuardados));
  }

  fetchApiData();
  }, []);

  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  const agregarUsuario = (nuevoUsuario) => {
    setUsuarios([...usuarios, nuevoUsuario]);
  };

  const limpiarUsuarios = () => {
    setUsuarios([]);
  }

  const todosLosUsuarios = [...apiUsuarios, ...usuarios];

  return (
    <div className='App'>
      <main className='main'>
        <h1 className='app_titulo animate__animated animate__pulse'>PeopleSearch <TbUserSearch className='icono_titulo'/></h1>
        <p className='slogan'>Datos Personales al Instante</p>
        
        <SearchBar usuarios={todosLosUsuarios} agregarUsuario={agregarUsuario} limpiarUsuarios={limpiarUsuarios}/>
        
      </main>
      
      <Footer/>

    </div>
  );
}



export default App;
