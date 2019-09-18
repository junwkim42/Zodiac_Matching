import React , {Component} from 'react';
import '../../style/style.css';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import matches from "../../matches.json";
import Underlay from '../../images/trzcacak.rs-zodiac-wheel-png-1500895.png';
import Logout from "../../images/logout-xxl.png"
import Heart from "../../images/heart.png"
import axios from "axios";


class Profile extends Component {

    state = {
        matches,
        horo:""
      };
    componentWillMount(){
        //check localStorage if there is a username
        //if not this.props.hitory("/login")
        if (!localStorage.getItem('username') || !this.props.location.state){
            this.props.history.push('/login');
        }
        else{
            console.log(this.props.location.state);
        }
    }

    handleLogout = () => {
        localStorage.setItem('username', "");
        this.props.history.push('/login');
    }

    handleMatch = () => {
        console.log(this.props.location.state);
        axios.get("/users/" + this.props.location.state.user.username).then(res => {
            console.log(res.data);
           this.props.history.push({
            pathname: '/matches',
            state: {
                user: res.data
            }});
        })
        .catch(err => console.log(err));
    }
    getHoroscope = () => {
        axios.get("https://sandipbgt.com/theastrologer/api/horoscope/" + this.props.location.state.user.zodiac.toLowerCase() + "/today/")
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
        let usrimg = 'https://static.zerochan.net/Maxine.Caulfield.full.2237212.jpg';
        let uName = "Unavailable";
        let uDate = "Unavailable";
        let zPic = "Unavailable";
        let uZodiac = "Unavailable";
        if (this.props.location.state){
            if (this.props.location.state.user.gender === "male"){
                usrimg = 'https://vignette.wikia.nocookie.net/rememberme/images/a/a3/Mark_jefferson.png/revision/latest?cb=20150301180024';
            }
            uName = this.props.location.state.user.name;
            uDate = this.props.location.state.user.birthDate;
            zPic = this.props.location.state.user.zodiacPic;
            uZodiac = this.props.location.state.user.zodiac;
        }

        return(
            <div className='profCont'>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <Link onClick={this.handleMatch}><img id='updateProfileBtn' src={Heart} alt="match" /></Link>
                    <div className="navbar-brand">
                        Z O D I A C
                    </div>
                    <Link onClick={this.handleLogout}><img id='logoutBtn' src={Logout} alt="logout"/></Link>
                </nav>
                <div id='spacer'></div>
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
                        {uName}, {uDate}
                        </Col>
                    </Row>
                </Container>
                    
                <Container>
                    <Row className='picCont'>
                        <Col xs={8} md={4} lg={3}>
                                <Image className='imgLogo mx-auto d-block' alt="zodiac picture" src={zPic} roundedCircle fluid/>
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
                                Today's Horoscope for {uZodiac}
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <br/>
            <br/>
            </div>
        
        )
    }
}

export default Profile;