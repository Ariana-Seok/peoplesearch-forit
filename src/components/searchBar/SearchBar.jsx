import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoSearchSharp } from "react-icons/io5";
import "./SearchBar.css";
import NewUser from "../newUser/newUser";
import Card from "../card/Card";
import { PropTypes } from 'prop-types';


function SearchBar({ usuarios, agregarUsuario }) {
    const [ search, setSearch ] = useState("");

    // Metodo de filtrado
    const searcher = (e) => {
        setSearch(e.target.value)
    }


    const results = !search ? usuarios : usuarios.filter((dato) => 
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

            <NewUser agregarUsuario={agregarUsuario}/>

            <div className="contenedor_cards card-group row p-4 mb-5">
                {results?.map((user) => (
                    <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center" key={user.id}>
                        <Card
                            key={user.id}
                            id={user.id}
                            nombre={user.name}
                            usuario={user.username}
                            email={user.email}
                            ciudad={user.address.city}
                            telefono={user.phone}
                            nombreEmpresa={user.company.name}
                        />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}


SearchBar.propTypes =  {
    usuarios: PropTypes.array.isRequired,
    agregarUsuario: PropTypes.func.isRequired
};

export default SearchBar;