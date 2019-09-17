import React , {Component} from 'react';
<<<<<<< HEAD
import Zodiac from './assets/img/zodiac.jpg';
import './assets/style/style.css';
=======
import Zodiac from './assets/img/zodiac.png';
import '../../style/style.css';
>>>>>>> origin/d
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Main extends Component {

<<<<<<< HEAD
    

    render(){
        return(   
=======
    render() {
        return(
            <>
>>>>>>> origin/d
                <div className='imgCont'>
 
                    <Container className='A'>
                        <Row className='a'>
                            <Col xs={8} md={4} lg={4}>
                                    <Image className='imgLogo mx-auto d-block' alt='aligment' src={Zodiac} roundedCircle fluid/>
                                    <div className='txtLogo'>Zodiac</div>
                            </Col>
                        </Row>
                    </Container>
<<<<<<< HEAD
           
                    
                    <br>
                    </br>
                    <br>
                    </br>
                    <Container className='C'>
                        <Row className='c'>
                            <Col xs={12} md={4} lg={2}>
                                    <Link to='/login'><Button size='lg'>LogIn</Button></Link> 
=======
                    {/* <Container className='B'>
                        <Row className='b'>
                            <Col xs={6} md={8} lg={8}>
                                Zodiac
                            </Col>
                        </Row>
                    </Container> */}
                    <br></br>
                    <br></br>
                    <Container className='C'>
                        <Row className='c'>
                            <Col xs={9} md={5} lg={3}>
                                    <Link to='/login'><Button size='lg' variant="info" className='genericBtn'>LOGIN</Button></Link> 
>>>>>>> origin/d
                            </Col>
                        </Row>
                        <Row className='d'>
<<<<<<< HEAD
                            <Col xs={12} md={4} lg={2}>
                                    <Link to='/signup'><Button className="super-colors"  size='lg'>SignUP</Button></Link>
=======
                            <Col xs={9} md={5} lg={3}>
                                    <Link to='/signup'><Button size='lg' variant="info" className='genericBtn'>SIGNUP</Button></Link>
                            </Col>
                        </Row>
                    </Container>
                    <br></br>
                    <Container>
                        <Row className='disclaimer'>
                            <Col xs={10} md={10} lg={12}>
                                    By using this app, you agree to our terms. Learn how we process your data by contacting us and asking for our Privary Policy.
>>>>>>> origin/d
                            </Col>
                        </Row>
                    </Container>
                </div> 
        )
    }
}

export default Main;