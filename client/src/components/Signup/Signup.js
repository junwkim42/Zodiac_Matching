import React , {Component} from 'react';
import Zodiac from './assets/img/zodiac.png';
import '../../style/style.css';
import { Button, Container, Row, Col, Image, Form} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Date from './Date';
import ImageUploader from'./ImageUploader';
import { Link } from 'react-router-dom';


class Signup extends Component {

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
                            <Col xs={8} md={5} lg={5}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        {/* <Form.Label>Name</Form.Label> */}
                                        <Form.Control type="email" placeholder="name" className='formInput'/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        {/* <Form.Label>Password</Form.Label> */}
                                        <Form.Control label="password" type="password" placeholder="password" className='formInput'/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        {/* <Form.Label>Confirm Password</Form.Label> */}
                                        <Form.Control type="password" placeholder="re-enter password" className='formInput'/>
                                    </Form.Group>
                                    
                                    <Form.Group controlId="formBasicPassword">
                                        {/* <Form.Label>Confirm Password</Form.Label> */}
                                        <Form.Control type="date" placeholder="birthdate" className='formInput'/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>upload your profile picture</Form.Label>
                                        <ImageUploader/>
                                    </Form.Group>
                                    
                                    <Link to='/profile'><Button type="submit" className='genericBtn'>
                                        SIGNUP
                                    </Button></Link>

                                    <Link to='/'><Button type="submit" className='genericBtn'>
                                        CANCEL
                                    </Button></Link>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div> 
            </>
        )
    }
}

export default Signup;