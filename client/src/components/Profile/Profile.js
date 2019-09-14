import React , {Component} from 'react';
import './assets/style/styleProfile.css';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Profile extends Component {

    render () {
        return(
            <div className='profCont'>
                <Container>
                    <Row className='picCont'>
                        <Col xs={8} md={4} lg={3}>
                                <Image className='imgLogo mx-auto d-block' alt="profile picture" src='import from database' roundedCircle fluid/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='label'>
                        <Col xs={8} md={4} lg={3}>
                        Username, Age
                        </Col>
                    </Row>
                </Container>
                    
                <Container>
                    <Row className='picCont'>
                        <Col xs={8} md={4} lg={3}>
                                <Image className='imgLogo mx-auto d-block' alt="profile picture" src='import from database' roundedCircle fluid/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='label'>
                        <Col xs={8} md={4} lg={3}>
                       Horoscope
                        </Col>
                    </Row>
                </Container>
                <br/>
                <Container>
                    <Row className='horoscope'>
                        <Col xs={10} md={10} lg={12}>
                        "This is your daily Horoscope. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        </Col>
                    </Row>
                </Container>
                <br/>
                <Container className='D'>
                        <Row className='d'>
                            <Col xs={12} md={4} lg={2}>
                                    <Link to='/matches'><Button variant="warning" size='lg'>Find Matches</Button></Link>
                            </Col>
                        </Row>
                    </Container>

            </div>
        )
    }
}

export default Profile;