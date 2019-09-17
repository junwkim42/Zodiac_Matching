import React , {Component} from 'react';
import Zodiac from '../Login/assets/img/zodiac.jpg';
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
                                        <Button 
                                            variant="primary" 
                                            disabled={!(this.state.username && this.state.password)}
                                            onClick={this.handleFormSubmit}
                                        >
                                            Login
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

export default Login;