import './footer.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Footer() {
    return (  
        <>
        <footer>
            <div className="contenedor_iconos">
                <a href="https://www.linkedin.com/in/danielafernandezlaura/" className='ancla_icono'><FaLinkedin /></a>
                <a href="https://github.com/Ariana-Seok" className='ancla_icono'><FaGithub /></a>
                <a href="mailto:danielafernandezlauradfl@gmail.com" className='ancla_icono'><IoMail /></a>
            </div>
            
            <p><span className='fw-semibold'>Desarrollado por:</span> Daniela Fernandez Laura</p>
        </footer>
        </>

    );
}

export default Footer;