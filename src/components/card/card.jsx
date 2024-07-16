import './card.css';
import propTypes from 'prop-types';
import { BiSolidUserCircle } from "react-icons/bi";

function Card({ id, nombre, usuario, email, ciudad, telefono, nombreEmpresa}) {

return (
    <div className='card' key={id}>
        <BiSolidUserCircle className='icono_user'/>
        <h4 className='titulo'>Datos</h4>
        <p>Nombre:</p>
        <span className='card__dato'>{nombre}</span>
        <p>Usuario:</p>
        <span className='card__dato'>{usuario}</span>
        <p>Email:</p>
        <span className='card__dato'>{email}</span>
        <p>Ciudad:</p>
        <span className='card__dato'>{ciudad}</span>
        <p>Telefono: </p>
        <span className='card__dato'>{telefono}</span>
        <p>Empresa:</p>
        <span className='card__dato'>{nombreEmpresa}</span>

    </div>
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
