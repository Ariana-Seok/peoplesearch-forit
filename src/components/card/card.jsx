import { BiSolidUserCircle } from "react-icons/bi";
import PropTypes from 'prop-types';
import "./card.css"

function Card({ id, nombre, usuario, email, ciudad, telefono, nombreEmpresa}) {
    return (  
        <>
            <div className="card p-4 m-3" key={id} >
                <BiSolidUserCircle className='fs-1 my-2 text-center icono_usuario'/>
                <h5 className="card-title fs-5 text-uppercase fw-bolder py-2 text-center">{nombre}</h5>
                <p className="card-text"><span className="fw-semibold">Usuario: </span>{usuario}</p>
                <p className="card-text"><span className="fw-semibold">Email: </span>{email}</p>
                <p className="card-text"><span className="fw-semibold">Ciudad: </span>{ciudad}</p>
                <p className="card-text"><span className="fw-semibold">Telefono: </span>{telefono}</p>
                <p className="card-text"><span className="fw-semibold">Empresa: </span>{nombreEmpresa}</p>
            </div>
        </>

    );
}


Card.propTypes = {
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    usuario: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    ciudad: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    nombreEmpresa: PropTypes.string.isRequired,
};


export default Card;