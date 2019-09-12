import React , {Component} from 'react';
import Zodiac from './assets/img/zodiac.png';
import './assets/style/styleSignup.css';
import { Button, Container, Row, Col, Image, Form, Card} from 'react-bootstrap';
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
                            <Col xs={6} md={8} lg={8}>
                                <Form>
                                <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Name" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Username" />
                                    </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control type="password" placeholder="Confirm Password" />
                                        </Form.Group>
                                       
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Birth-Date</Form.Label>
                                            <Date/>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Upload Image</Form.Label>
                                            <ImageUploader/>
                                        </Form.Group>
                                        
                                        <Button variant="primary" type="submit">
                                            Signup
                                        </Button>

                                        <Link to='/'><Button variant="primary" type="submit">
                                            Cancel
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