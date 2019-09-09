import React , {Component} from 'react';
import Zodiac from './assets/img/zodiac.png';
import './assets/style/style.css';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';


class Main extends Component {

    render(){
        return(
            <>
                <Container>
                <Row>
                <Col xs={6} md={4}>
                <Image src={Zodiac} roundedCircle/>
                </Col>
                </Row>
                </Container>
            
            
            <Container>
                <h1>Zodiac</h1>
            </Container>
            
            
            <Button variant="success">LogIn</Button>
        
            
            <Button variant="warning">SignUP</Button>
            
            </>
        )
    }
}

export default Main;