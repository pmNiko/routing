import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import useGet from "../../Services/useHTTP";
import { useParams } from "react-router-dom";

/*  match es una prop implicita que contiene en otros
    los params que llegan al cargar el componente
    con useParams recibimos implicitamente las props y cambiamos 
    const Personaje = ({ match }) => { 
    const Personaje = () => { 
      const {id} = useParams() 
      // esto nos muestra el id que viene dentro de match en las props          
*/
const Personaje = () => {
  // este es el id que enviamos por params desde el component Personajes
  const { id } = useParams();
  // realizamos la petición con el id que nos llega desde los params de match
  const [data, isLoading, error] = useGet({ url: id });
  const personaje = data[0];

  return (
    <>
      {!isLoading ? (
        <Container>
          <Row>
            <Col md="3" lg="3" xs="12">
              <Card>
                <Card.Img
                  src={personaje.img}
                  variant="top"
                  key={personaje.char_id}
                />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {personaje.name} {personaje.nickname || ""}{" "}
                  </Card.Title>
                  <Card.Text>
                    {" "}
                    {personaje.status} {personaje.birthday}{" "}
                    {personaje.occupation || ""}{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="5" lg="5" xs="12"></Col>
          </Row>
        </Container>
      ) : (
        <h1>cargando...</h1>
      )}
    </>
  );
};

export default Personaje;

{
  /* la data llega como un array de 1 obj pero falla al destructurar
                            por esto lo recorremos con map */
}
{
  /* {personaje.map(
              ({
                char_id,
                img,
                name,
                nickname,
                status,
                birthday,
                occupation,
              }) => (
                <Card>
                  <Card.Img src={img} variant="top" key={char_id} />
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      {name} {nickname || ""}{" "}
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      {status} {birthday} {occupation || ""}{" "}
                    </Card.Text>
                  </Card.Body>
                </Card>
              )
            )} */
}
