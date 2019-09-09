import React , {Component} from 'react';
import Zodiac from './assets/img/zodiac.png';
import './assets/style/style.css';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';


class Main extends Component {

    render(){
        return(
            <>
                <div className='imgCont'>
                    <Container className='A'>
                        <Row className='a'>
                            <Col xs={8} md={4} lg={3}>
                                    <Image className='imgLogo mx-auto d-block' alt='aligment' src={Zodiac} roundedCircle fluid/>
                            </Col>
                        </Row>
                    </Container>
                    <Container className='B'>
                        <Row className='b'>
                            <Col xs={6} md={8} lg={8}>
                                Zodiac
                            </Col>
                        </Row>
                    </Container>
                    
                    <Container className='C'>
                        <Row className='c'>
                            <Col xs={12} md={4} lg={2}>
                                    <Button variant="success" size='lg'>LogIn</Button>  
                            </Col>
                        </Row>
                    </Container>
                    <Container className='D'>
                        <Row className='d'>
                            <Col xs={12} md={4} lg={2}>
                                    <Button variant="warning" size='lg'>SignUP</Button>
                            </Col>
                        </Row>
                    </Container>
                </div> 
            </>
        )
    }
}

export default Main;