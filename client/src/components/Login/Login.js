import React , {Component} from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> junwon
import Zodiac from './assets/img/zodiac.jpg';
import '../../style/style.css';
import API from '../utils/API'
import './assets/style/styleLogin.css';
=======
>>>>>>> ef013ba55bcbc15c75845dc1ede3ed20f3cd1ee4
import axios from "axios";
<<<<<<< HEAD
=======
import Zodiac from './assets/img/zodiac.png';
import '../../style/style.css';
>>>>>>> junwon
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
            .then(res => console.log(res))
=======
<<<<<<< HEAD
<<<<<<< HEAD
            // .then(res => )
=======
            .then(res => console.log(res))
>>>>>>> 767cb87ae4a936a687c3edf62839864a67f7ce1f
=======
            .then(res => {
                var json = JSON.parse(res.config.data);
                console.log(res);
                console.log("=================================");
                console.log(res.config.data);
                console.log("=================================");
                console.log(json.username);
                localStorage.setItem("username", json.username);
                this.props.history.push({
                    pathname: '/profile',
                    state: {username: json.username}});
            })
>>>>>>> ef013ba55bcbc15c75845dc1ede3ed20f3cd1ee4
>>>>>>> junwon
            .catch(err => console.log(err));
        }
      };

    render(){
        return(
            <>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> junwon
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
                                        <Link to='/profile'><Button 
                                            variant="primary" 
                                            // disabled={!(this.state.author && this.state.title)}
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
            
<<<<<<< HEAD
=======
=======
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
                                    <Form.Control 
                                        type="email" 
                                        className='formInput'
                                        value={this.state.username}
                                        onChange={this.handleInputChange} 
                                        name="username" 
                                        placeholder="Enter your email" />
                                </Form.Group>
                                <Form.Group className='formGroup' controlId="formBasicPassword">
                                    {/* <Form.Label className='formLabel'>Password</Form.Label> */}
                                    <Form.Control 
                                        type="password"  
                                        className='formInput'
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        name="password"
                                        placeholder="Password"  />
                                </Form.Group>
                                <Button 
                                    type="submit" 
                                    variant="info" 
                                    className='genericBtn'
                                    disabled={!(this.state.username && this.state.password)}
                                    onClick={this.handleFormSubmit}>
                                    LOGIN
                                </Button>
                                <Link to='/'><Button type="submit" variant="info" className='genericBtn'>
                                    CANCEL
                                </Button></Link>
                            </Form>
                        </Col>
                    </Row>
                </Container>
>>>>>>> ef013ba55bcbc15c75845dc1ede3ed20f3cd1ee4
>>>>>>> junwon
            </>
        )
    }
}

export default Login;