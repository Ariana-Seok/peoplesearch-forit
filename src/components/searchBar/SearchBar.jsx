import { IoSearchSharp } from "react-icons/io5";
import "./SearchBar.css";
import { useEffect, useState } from 'react';
import Card from "../card/Card";
import 'bootstrap/dist/css/bootstrap.min.css';


function SearchBar() {
    const [ users, setUsers ] = useState([]);
    const [ search, setSearch ] = useState("");

    const URL = "https://jsonplaceholder.typicode.com/users"
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setUsers(data)
    }

    useEffect( () => {
        showData();
    }, [])

    // Metodo de filtrado
    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e)
    }

    const results = !search ? users :  users.filter((dato) => 
        dato.name.toLowerCase().includes(search.toLowerCase()) ||
        dato.email.toLowerCase().includes(search.toLowerCase()) ||
        dato.address.city.toLowerCase().includes(search.toLowerCase())
        );

    


    return (
        <>
        <div className="container-fluid d-flex flex-column align-items-center">
            <div className="contenedor_buscador">
                <input value={search} onChange={searcher} type="text" id="input_box" placeholder="Buscar por nombre / email / ciudad" autoComplete="off"/>
                <button><IoSearchSharp className='icono_busqueda'/></button>
            </div>  
            
            <div className="contenedor_cards card-group d-flex align-items-center justify-content-evenly ">
                {results?.map((user) => (
                    <Card
                        key={user.id}
                        nombre={user.name}
                        usuario={user.username}
                        email={user.email}
                        ciudad={user.address.city}
                        telefono={user.phone}
                        nombreEmpresa={user.company.name}
                        />
                ))}
            </div>
        </div>
        </>
    )
}

export default SearchBar;