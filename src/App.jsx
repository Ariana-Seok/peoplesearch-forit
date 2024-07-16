import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import { TbUserSearch } from "react-icons/tb";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='App'>
      <main className='main'>
        <h1 className='app_titulo animate__animated animate__pulse'>PeopleSearch <TbUserSearch className='icono_titulo'/></h1>
        <p className='slogan'>Datos Personales al Instante</p>
        
        <SearchBar />
        
      </main>
      
      <Footer/>

    </div>
  );
}



export default App;
