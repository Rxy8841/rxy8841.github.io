import {React, useEffect} from 'react';
import tlogo from '../../static/tokyo_logo.jpg'
import mappic from '../../static/maps location.PNG'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../homepage/index.css';

import { 
Container,
Row,
Col,
Nav
} from 'react-bootstrap';


const Homepage = () => {

    function ScrollToOrder() {
        useEffect(() => {
            if (window.location.href.indexOf("?scrollorder=scrolltoorder") > -1){
                var element = document.getElementById('section1');
                var headerOffset = 40;
                var elementPosition = element.offsetTop;
                var offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
        return null
    }


    return (
        <div style={{backgroundColor:'#D4BEAB'}}>
            <Container fluid>
                <Row style={{paddingTop:"1em"}}>
                    <Col sm={12} md={12} lg={5} style={{textAlign:'center',paddingTop:"2em"}}>
                        <p class="fs-1 fw-bold text-capitalize">Tokyo Express</p>
                        <p class="text-capitalize">Authentic Japanese restaurant</p>
                        <p class="text-capitalize">8 Lagrange Ave, Poughkeepsie, NY 12603</p>

                        <p id='section1' style={{paddingTop:"2em"}} class="fs-5 fw-bold text-capitalize text-decoration-underline">Hours</p>
                        <p class="text-capitalize">Monday to Thursday:  11:30am - 10pm</p>
                        <p class="text-capitalize">Friday to Saturday:  11:30am - 10:30pm</p>
                        <p class="text-capitalize">Sunday:  12pm - 10pm</p>

                        <p style={{paddingTop:"2em"}} class="fs-5 fw-bold text-capitalize text-decoration-underline">Contact Us</p>
                        <p class="text-capitalize">Phone: (845)-452-5033</p>

                        <p style={{paddingTop:"2em"}} class="fs-5 fw-bold text-capitalize text-decoration-underline">Order Online / Delivery</p>
                        <Nav.Link href="https://www.grubhub.com/restaurant/tokyo-express-8-lagrange-ave-poughkeepsie/2421751">GrubHub</Nav.Link>
                        <Nav.Link href="https://www.ubereats.com/store/tokyo-express/PBDM-rFMQ9KqYoZ4oQkGOQ">Uber Eats</Nav.Link>
                        <Nav.Link href="https://www.doordash.com/store/tokyo-express-poughkeepsie-1054188/">DoorDash</Nav.Link>
                        <Nav.Link href="https://www.beyondmenu.com/37080/poughkeepsie/tokyo-express-poughkeepsie-12603.aspx">Beyond Menu</Nav.Link>
                    </Col>
                    <Col sm={12} md={12} lg={6} style={{textAlign:'center'}}>
                        <div>
                            <img src={tlogo} alt={'tokyo logo'} style={{width: '100%', height: 'auto'}}>
                            </img>
                        </div>
                    </Col>
                </Row>


                <Row style={{paddingTop:"6em"}}>
                    <Col style={{textAlign:'center'}}>
                        <p class="fs-2 fw-bold text-capitalize">Location</p>

                        <div class="mapcontainer">
                            <img src={mappic} alt={'map locations'}></img>
                            <a class='btn' href="https://www.google.com/maps/place/Tokyo+Express/@41.6927864,-73.9023003,17z/data=!3m1!4b1!4m5!3m4!1s0x89dd3e500e4c74bd:0x698b12363e027409!8m2!3d41.6926846!4d-73.9006255">
                                Directions
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <div style={{paddingTop:"5em"}}></div>
            <ScrollToOrder/>
        </div>
    );
}

export default Homepage;