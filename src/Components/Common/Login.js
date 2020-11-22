import React from "react";
import { useDebugValue } from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
import useCustomForm from "./../../customHooks/useCustomForm";
/*  librerias para hacer las validaciones
    npm i react-hook-form
    yup genera un esquema consistente para poder validar en le front
    npm i @hookform/resolvers yup
    --Nota: el esquema de valildacón es propio de un componente */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./../../Schemas/Schema";
// Styled component    npm i styled-components
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 95vh;
  width: 30vw;
  justify-content: center;
  align-items: center;
`;

//  Minuto 1:41

// -------  Componente Login ---------- //
const Login = () => {
  // no funciona
  useDebugValue("test");
  // utilizo el custom Form
  const [values, handler, setValues] = useCustomForm();
  // hook form: register(ref) handleSubmit(guardian de validación) y errors
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  // Se va ejecutar cuando el guardian valide el schema
  const login = () => {
    // Enviar los datos al servidor
    const { usuario, password } = values;
    console.log(usuario, password, "se a logueado");

    setValues({});
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit(login)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                name="usuario"
                placeholder="Ingrese su nombre"
                ref={register} //control del input ref de useForm
                onChange={handler} //dispara el evento del customForm
              />
              <Form.Text className="text-danger">
                {errors.usuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                ref={register}
                onChange={handler}
                placeholder="Contraseña"
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="primary " type="submit" block>
              Ingresar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
