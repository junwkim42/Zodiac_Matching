import React , {Component} from 'react';
import '../../style/style.css';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserCard from "../../components/UserCard/UserCard";
import Wrapper from "../../components/Wrapper/Wrapper";
import matches from "../../matches.json";
import Underlay from '../../images/trzcacak.rs-zodiac-wheel-png-1500895.png';
import axios from "axios";


class Profile extends Component {

    state = {
        matches,
        horo:""
      };
    componentDidMount(){
        //check localStorage if there is a username
        //if not this.props.hitory("/login")
        if (!localStorage.getItem('username')){
            this.props.history.push('/login');
        }
        else{
            console.log(this.props.location.state);
        }
    }

    getHoroscope = () => {
        axios.get("http://sandipbgt.com/theastrologer/api/horoscope/" + this.props.location.state.user.zodiac.toLowerCase() + "/today/")
        .then(res => {
            console.log(res);
            let i = res.data.horoscope.search("\\(c\\)");
            let str = res.data.horoscope.substring(0, i);

            this.setState({
                horo: str
            })
        })
        .catch(err => console.log(err));
    }

    removeMatch = id => {
    // Filter this.state.matches for matches with an id not equal to the id being removed
    const matches = this.state.matches.filter(match => match.id !== id);
    // Set this.state.matches equal to the new matches array
    this.setState({ matches });
    };
    
    render () {
        console.log(this.props.location.state);
        let usrimg = 'https://static.zerochan.net/Maxine.Caulfield.full.2237212.jpg';
        if (this.props.location.state.user.gender === "male"){
            usrimg = 'https://vignette.wikia.nocookie.net/rememberme/images/a/a3/Mark_jefferson.png/revision/latest?cb=20150301180024';
        }

        return(
            <div className='profCont'>
                <Container>
                    <Row className='picCont'>
                        <Col xs={9} md={5} lg={3}>
                                <Image id='profPic' className='imgLogo mx-auto d-block' alt="profile picture" src={usrimg} roundedCircle fluid/>
                                <img className='imgUnderlay' alt="image underlay" src={Underlay}/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='label'>
                        <Col xs={8} md={4} lg={3}>
                        {this.props.location.state.user.name}, {this.props.location.state.user.birthDate}
                        </Col>
                    </Row>
                </Container>
                    
                <Container>
                    <Row className='picCont'>
                        <Col xs={8} md={4} lg={3}>
                                <Image className='imgLogo mx-auto d-block' alt="zodiac picture" src={this.props.location.state.user.zodiacPic} roundedCircle fluid/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='label'>
                        <Col xs={8} md={4} lg={3}>
                       {this.state.horo}
                        </Col>
                    </Row>
                </Container>
                <br/>
                <Container>
                    <Row className='horoscope'>
                        <Col xs={10} md={10} lg={12}>
                            <Button 
                            variant="info" 
                            className='genericBtn'
                            onClick={this.getHoroscope}>
                                Today's Horoscope for {this.props.location.state.user.zodiac}
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <br/>
                <Container>
                    <Col xs={12} md={12} lg={12}>
                            <Wrapper>
                                    {this.state.matches.map(match => (
                                            <UserCard
                                            removeMatch={this.removeMatch}
                                            id={match.id}
                                            name={match.name}
                                            gender={match.gender}
                                            age={match.age}
                                            birthdate={match.birthdate}
                                            profilePic={match.profilePic}
                                            zodiacPic={match.zodiacPic}
                                            zodiacSign={match.zodiacSign}
                                            />
                                        ))
                                    }
                            </Wrapper>
                    </Col>
                </Container>
                {/* <Container className='D'>
                    <Row className='d'>
                        <Col xs={12} md={4} lg={2}>
                                <Link to='/matches'><Button size='lg' className='genericBtn'>Find Matches</Button></Link>
                        </Col>
                    </Row>
                </Container> */}
            <br/>
            </div>
        
        )
    }
}

export default Profile;