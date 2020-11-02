import React from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap';
import useGet from '../../Services/useHTTP';

const Personaje = ({match}) => {

    const [personaje,isLoading,error] = useGet({url: match.params.id});

    const [{char_id,name,birthday,status,nickname,img,occupation}] = personaje;

    return (  
        <>
            <Container>
                <Row>
                    <Col md="5" lg="5" xs="12">
                        <Card>
                            <Card.Img src={img} variant="top"/>
                            <Card.Body>
                                <Card.Title> {name} {nickname || ""} </Card.Title>
                                <Card.Text> {status} {birthday} {occupation || ""} </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>                    
                    <Col md="5" lg="5" xs="12">

                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default Personaje;