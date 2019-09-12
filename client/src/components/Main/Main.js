import React , {Component} from 'react';
import Zodiac from './assets/img/zodiac.png';
import './assets/style/style.css';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Main extends Component {

    render(){
        return(
            <>
                <div className='imgCont'>
                    <Container className='A'>
                        <Row className='a'>
                            <Col xs={8} md={4} lg={4}>
                                    <Image className='imgLogo mx-auto d-block' alt='aligment' src={Zodiac} roundedCircle fluid/>
                            </Col>
                        </Row>
                    </Container>
                    {/* <Container className='B'>
                        <Row className='b'>
                            <Col xs={6} md={8} lg={8}>
                                Zodiac
                            </Col>
                        </Row>
                    </Container> */}
                    
                    <br>
                    </br>
                    <br>
                    </br>
                    <Container className='C'>
                        <Row className='c'>
                            <Col xs={12} md={4} lg={2}>
                                    <Link to='/login'><Button size='lg'>LogIn</Button></Link> 
                            </Col>
                        </Row>
                    </Container>
                    <Container className='D'>
                        <Row className='d'>
                            <Col xs={12} md={4} lg={2}>
                                    <Link to='/signup'><Button className="super-colors"  size='lg'>SignUP</Button></Link>
                            </Col>
                        </Row>
                    </Container>
                </div> 
            </>
        )
    }
}

export default Main;