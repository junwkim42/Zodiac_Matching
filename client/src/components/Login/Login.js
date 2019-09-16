import React , {Component} from 'react';
<<<<<<< HEAD
import Zodiac from './assets/img/zodiac.jpg';
=======
import Zodiac from '../Login/assets/img/zodiac.jpg';
>>>>>>> 767cb87ae4a936a687c3edf62839864a67f7ce1f
import './assets/style/styleLogin.css';
import axios from "axios";
import { Button, Container, Row, Col, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
          axios.post("/login", {
            username: this.state.username,
            password: this.state.password
          })
<<<<<<< HEAD
            // .then(res => )
=======
            .then(res => console.log(res))
>>>>>>> 767cb87ae4a936a687c3edf62839864a67f7ce1f
            .catch(err => console.log(err));
        }
      };

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
                                <Form onSubmit={this.handleFormSubmit}>
                                    <Form.Group controlId="formBasicUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            value={this.state.username}
                                            onChange={this.handleInputChange} 
                                            name="username" 
                                            placeholder="Enter Username"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                            name="password"
                                            placeholder="Password" 
                                        />
                                    </Form.Group>
                                       <Link to='/profile'> <Button 
                                            variant="primary" 
                                            disabled={!(this.state.author && this.state.title)}
                                            onClick={this.handleFormSubmit}
                                        >
                                            Login
                                        </Button>
                                        </Link>

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

export default Login;