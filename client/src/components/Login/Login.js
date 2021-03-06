import React , {Component} from 'react';
import axios from "axios";
import Zodiac from './assets/img/zodiac.png';
import '../../style/style.css';
import { Button, Container, Row, Col, Image, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Login extends Component {
    state = {
        username: "",
        password: ""
    };
    componentWillMount(){
        if (localStorage.getItem('username')){
            var uName = localStorage.getItem('username');
            axios.get("/users/" + uName).then(res => {
                console.log(res.data);
               this.props.history.push({
                pathname: '/profile',
                state: {
                    user: res.data
                }});
            })
            .catch(err => console.log(err));
        }
    }
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
                axios.get("/users/" + json.username).then(res => {
                    console.log(res.data);
                   localStorage.setItem("username", json.username);
                   this.props.history.push({
                    pathname: '/profile',
                    state: {
                        user: res.data
                    }});
                })
                .catch(err => console.log(err));



            })
            .catch(err => {
                alert("Wrong user credentials. Please check your information again");
                console.log(err);});
        }
      };

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
            </>
        )
    }
}

export default Login;