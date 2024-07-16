import { BiSolidUserCircle } from "react-icons/bi";
import propTypes from 'prop-types';
import "./card.css"

function Card({ id, nombre, usuario, email, ciudad, telefono, nombreEmpresa}) {
    return (  
        <>
        <div className="card-group p-3">
            <div className="card d-flex align-items-center p-4 m-3" key={id}>
                <BiSolidUserCircle className='fs-1 my-2'/>
                <h5 className="card-title fs-5 text-uppercase fw-bolder py-2">{nombre}</h5>
                <p className="card-text"><span className="fw-medium">Usuario: </span>{usuario}</p>
                <p className="card-text"><span className="fw-medium">Email: </span>{email}</p>
                <p className="card-text"><span className="fw-medium">Ciudad: </span>{ciudad}</p>
                <p className="card-text"><span className="fw-medium">Telefono: </span>{telefono}</p>
                <p className="card-text"><span className="fw-medium">Empresa: </span>{nombreEmpresa}</p>
            </div>
        </div>
        </>

    );
}


Card.propTypes = {
    id: propTypes.number.isRequired,
    nombre: propTypes.string.isRequired,
    usuario: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    ciudad: propTypes.string.isRequired,
    telefono: propTypes.string.isRequired,
    nombreEmpresa: propTypes.string.isRequired,
};


export default Card;