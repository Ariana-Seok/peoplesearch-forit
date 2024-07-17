import 'bootstrap/dist/css/bootstrap.min.css';
import "./newUser.css"
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as formik from 'formik';
import * as yup from 'yup';


function NewUser({ agregarUsuario }) {
    const [mostrar, setMostrar] = useState(false);
    const { Formik } = formik;
    const handleClose = () => setMostrar(false);
    const handleMostrar = () => setMostrar(true);

    
    const schema = yup.object().shape({
        name: yup.string().required("Ingrese un nombre valido"),
        username: yup.string().required("Usuario no valido"),
        email: yup.string().email("Email inválido").required("Ingrese un email valido"),
        city: yup.string().required("Ciudad es requerida"),
        phone: yup.string().matches(/^\d+$/, "El teléfono solo debe contener números").required("Teléfono es requerido"),
        company: yup.string().required("Nombre de empresa es requerida"),
    });

    const handleSubmit = (values, actions) => {
        agregarUsuario({
            id: Date.now(),
            name: values.name,
            username: values.username,
            email: values.email,
            address: { city: values.city},
            phone: values.phone,
            company: {name: values.company}
        });
        actions.resetForm();
        handleClose();
    }

    return (
        <div className='my-5'>
        <Button className="btn_agregar" onClick={handleMostrar}>
        Agregar un nuevo usuario
        </Button>

        <Modal show={mostrar} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar un nuevo usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                    initialValues={{
                        name: '',
                        username: '',
                        email:'',
                        city: '',
                        phone: '',
                        company: '',
                    }}
                >

                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationFormik01">
                            <Form.Label>Nombre y apellido</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                isValid={touched.name && !errors.name}
                                isInvalid={touched.name && !!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationFormikUsername">
                        <Form.Label>Usuario</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            isInvalid={!!errors.username}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </InputGroup>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationFormik02">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ejemplo@gmail.com"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationFormik03">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ciudad"
                                name="city"
                                value={values.city}
                                onChange={handleChange}
                                isInvalid={!!errors.city}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.city}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationFormik04">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0123456789"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                isInvalid={!!errors.phone}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.state}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationFormik05">
                            <Form.Label>Empresa</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Empresa"
                                name="company"
                                value={values.company}
                                onChange={handleChange}
                                isInvalid={!!errors.company}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.state}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                        

                    <Button type="submit">Agregar</Button>
                    </Form>
            )}
            </Formik>
            </Modal.Body>
        </Modal>
        </div>
    )
}

NewUser.propTypes =  {
    agregarUsuario: PropTypes.func.isRequired
};


export default NewUser;