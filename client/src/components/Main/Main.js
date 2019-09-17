import React , {Component} from 'react';
import Zodiac from './assets/img/zodiac.png';
import '../../style/style.css';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Main extends Component {

<<<<<<< HEAD
    

    render(){
<<<<<<< HEAD
        return(
<>
  
=======
        return(   
>>>>>>> 767cb87ae4a936a687c3edf62839864a67f7ce1f
=======
    render() {
        return(
            <>
>>>>>>> ef013ba55bcbc15c75845dc1ede3ed20f3cd1ee4
                <div className='imgCont'>
 
                    <Container className='A'>
                        <Row className='a'>
                            <Col xs={8} md={4} lg={4}>
                                    <Image className='imgLogo mx-auto d-block' alt='aligment' src={Zodiac} roundedCircle fluid/>
                                    <div className='txtLogo'>Zodiac</div>
                            </Col>
                        </Row>
                    </Container>
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
                            </Col>
                        </Row>
                        <Row className='d'>
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
                            </Col>
                        </Row>
                    </Container>
                </div> 
<<<<<<< HEAD
<<<<<<< HEAD
         
            </>
=======
>>>>>>> 767cb87ae4a936a687c3edf62839864a67f7ce1f
=======
            </>
>>>>>>> ef013ba55bcbc15c75845dc1ede3ed20f3cd1ee4
        )
    }
}

export default Main;