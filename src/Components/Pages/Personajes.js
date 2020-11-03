import React from 'react';
import useGet from '../../Services/useHTTP';
import {Card,Button,Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Personajes = () => {
    // array de props que me devuelve el custom hook
    const [personajes,isLoading,error] = useGet({url: ""});

    return (  
        <>
            <Container>
                <Row>
                    {personajes.map( ({char_id,name,birthday,status,nickname,img,occupation}) => (
                        
                        <Col md="4" lg="4" xs="12" key={char_id} className="mt-3 mb-2">
                            <Card>
                                <Card.Img src={img} variant="top"/>
                                <Card.Body>
                                    <Card.Title> {name} {nickname || ""} </Card.Title>
                                    <Card.Text> {status} {birthday} {occupation || ""} </Card.Text>
                                    <Button block>
                                        <Link 
                                            // con esta ruta accedemos al componente de detalle
                                            to={`/personaje/${char_id}`} 
                                            className="text-white"
                                            > Ver detalle 
                                        </Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
 
export default Personajes;