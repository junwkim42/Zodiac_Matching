import React , {Component} from 'react';
import Zodiac from './assets/img/zodiac.jpg';
import '../../style/style.css';
import API from '../utils/API'
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
        if (this.state.title && this.state.author) {
          API.userLogin({
            username: this.state.username,
            password: this.state.password
          })
            // .then(res => )
            .catch(err => console.log(err));
        }
      };

    render(){
        return(
            <>
                <Container className='A'>
                    <Row className='a'>
                        <Col xs={8} md={4} lg={3}>
                                <Image className='imgLogo mx-auto d-block' alt='alignment' src={Zodiac} roundedCircle fluid/>
                                <div className='txtLogo'>Zodiac</div>
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