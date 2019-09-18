import React , {Component} from 'react';
import { Button, Container, Row, Col, Form, InputGroup, FormControl} from 'react-bootstrap';



class Chat extends Component {
    state={
        chatLine: "",
        chatHistory: []
    }
    
    handleChange= (e) =>{
        // console.log(e.target.value)
        this.setState({
            chatLine: e.target.value
        })
    }

    handleSubmit= (e) => {
        e.preventDefault();
        // append to the chat
        let newChat = this.state.chatHistory;
        console.log(newChat)
        newChat.push( this.state.chatLine );
        console.log( newChat );
        this.setState({
            chatHistory: newChat
            
        })
    }

    
    render(){
        return(
            <>

                <Container className='CHAT'>
                    <Row className='chat'>
                        <Col xs={10} md={10} lg={12}>
                            chatHistory: {this.state.chatHistory}
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <ul>
                                                    {this.state.chatHistory.map(n => <li>{n}</li>)}
                                                    </ul>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Container className='TYPE'>
                    <Row className='type'>
                        <Col xs={10} md={10} lg={12}>
                            <form onSubmit={this.handleSubmit}>
                                <input className="cd" type="text" onChange={this.handleChange} />
                                <button className="cd" >Send</button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Chat;