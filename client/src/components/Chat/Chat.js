import React , {Component} from 'react';
import '../../style/style.css';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

<<<<<<< HEAD


=======
>>>>>>> junwon
class Chat extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Col xs={8} md={4} lg={3}>
                        <Row>
                            <Image className='imgLogob mx-auto d-block' alt="profile picture" src='import from database' roundedCircle fluid/>
                            {/* <ChatBot
                                steps={[
                                    {
                                    id: 'hello-world',
                                    message: 'Hello World!',
                                    end: true,
                                    },
                                ]} /> */}
                        </Row>
                    </Col>
                </Container>
            </div>
        )
    }
}

<<<<<<< HEAD


=======
>>>>>>> junwon
export default Chat;