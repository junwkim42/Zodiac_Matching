import React , {Component} from 'react';
import '../../style/style.css';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Profile extends Component {
    render() {
        return (
            <div>
                <Col xs={8} md={4} lg={3}>
                    <Row>
                    <Image className='imgLogo mx-auto d-block' alt="profile picture" src='import from database' roundedCircle fluid/>
                    </Row>
                </Col>
            </div>
        )
    }
}

export default Profile;