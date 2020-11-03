import React from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap';
import useGet from '../../Services/useHTTP';

// match es una prop implicita que contiene en otros 
// los params que llegan al cargar el componente
const Personaje = ({match}) => {
    // realizamos la petición con el id que nos llega desde los params de match
    const [personaje,isLoading,error] = useGet({url: match.params.id});

    return (  
        <>
            <Container>                
                <Row>
                    <Col md="3" lg="3" xs="12">
                        {/* la data llega como un array de 1 obj pero falla al destructurar
                            por esto lo recorremos con map */}
                        {personaje.map( ({char_id,img,name,nickname,status,birthday,occupation}) => (
                            <Card>
                                <Card.Img src={img} variant="top" key={char_id}/>
                                <Card.Body>
                                    <Card.Title> {name} {nickname || ""} </Card.Title>
                                    <Card.Text> {status} {birthday} {occupation || ""} </Card.Text>
                                </Card.Body>
                            </Card>
                        ) )}
                    </Col>                    
                    <Col md="5" lg="5" xs="12">

                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default Personaje;