import React , {Component} from 'react';
import Zodiac from './assets/img/zodiac.png';
import '../../style/style.css';
import { Button, Container, Row, Col, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Login extends Component {

    render(){
        return(
            <>
                <Container className='A'>
                    <Row className='a'>
                        <Col xs={8} md={4} lg={3}>
                                <Image className='imgLogo mx-auto d-block' alt='alignment' src={Zodiac} roundedCircle fluid/>
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container className='B'>
                    <Row className='b'>
                        <Col xs={9} md={5} lg={5}>
                            <Form>
                                <Form.Group className='formGroup' controlId="formBasicEmail">
                                    {/* <Form.Label className='formLabel'>Username</Form.Label> */}
                                    <Form.Control type="email" placeholder="name" className='formInput' />
                                </Form.Group>
                                <Form.Group className='formGroup' controlId="formBasicPassword">
                                    {/* <Form.Label className='formLabel'>Password</Form.Label> */}
                                    <Form.Control type="password" placeholder="password" className='formInput' />
                                </Form.Group>
                                <Link to='/profile'><Button type="submit" className='genericBtn'>
                                    LOGIN
                                </Button></Link>
                                <Link to='/'><Button type="submit" className='genericBtn'>
                                    CANCEL
                                </Button></Link>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Login;