import React , {Component} from 'react';
import Zodiac from './assets/img/zodiac.jpg';
import './assets/style/style.css';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Main extends Component {

    render(){
        return(
<>
  
                <div className='imgCont'>

                    <div className="infoDiv">
 
                    <Container className='A'>
                        <Row className='a'>
                            <Col xs={8} md={4} lg={4}>
                                    <Image className='imgLogo mx-auto d-block' alt='aligment' src={Zodiac} roundedCircle fluid/>
                                    <div className='txtLogo'>Zodiac</div>
                            </Col>
                        </Row>
                    </Container>
           
                    
                    <br>
                    </br>
                    <br>
                    </br>
                    <Container className='C'>
                        <Row className='c'>
                            <Col xs={12} md={4} lg={4}>
                                    <Link to='/login'><Button size='lg'>LogIn</Button></Link> 
                            </Col>
                        </Row>
                    </Container>
                    <br>
                    </br>
                    
                    <Container className='D'>
                        <Row className='d'>
                            <Col xs={12} md={4} lg={4}>
                                    <Link to='/signup'><Button className="super-colors"  size='lg'>SignUP</Button></Link>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                </div> 
         
            </>
        )
    }
}

export default Main;