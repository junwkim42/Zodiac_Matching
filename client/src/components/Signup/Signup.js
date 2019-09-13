import React , {Component} from 'react';
import Zodiac from './assets/img/zodiac.jpg';
import './assets/style/styleSignup.css';
<<<<<<< HEAD
import { Button, Container, Row, Col, Image, Form, DropdownButton, Dropdown } from 'react-bootstrap';
=======
import { Button, Container, Row, Col, Image, Form, Card} from 'react-bootstrap';
>>>>>>> junwon
import "react-datepicker/dist/react-datepicker.css";
import Date from './Date';
import Uploader from'./Uploader';
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
                                    <div className='txtLogo'>Zodiac</div>
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

                                        <DropdownButton id="dropdown-basic-button" title="Gender">
                                            <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Unknow</Dropdown.Item>
                                        </DropdownButton>

                                        <Form.Group controlId="formBasicPassword">
                                            {/* <Form.Label>Upload Image</Form.Label> */}
                                            <Uploader/>
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