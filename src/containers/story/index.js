import {React, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutpic from '../../static/about_pic.jpg'

import {
Container,
Row,
Col,
Card
} from 'react-bootstrap';


const Story = () => {

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
                <Row >
                    <Col sm={4} md={8} lg={12} style={{textAlign:'center'}}>

                        <div>
                            <p style={{
                            fontSize:'80px',
                            fontWeight: '900',
                            color: '#43C684'}}>
                                About Us
                            </p>

                            <img src={aboutpic} alt={'about pic'} style={{width: '40%', height: 'auto'}} ></img>
                        </div>
                    </Col>
                </Row>
                <Row style={{paddingTop:"3em"}}>
                    <Col sm={4} md={8} lg={12} style={{textAlign:'center'}}>
                        <Card style={{ width: '60%', transform:'translate(-50%)', left: '50%', height: 'auto' }}>
                            <Card.Body>We are freaken awesome and no one can say otherwise. If you plan to come to our <br />
                                restaurant make sure to bring lots and lots of moola $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ <br /><br />

                                On the left we have the fattest man in the world!! He goes by Wonald, make sure to emphasize <br />
                                the W (WAAAAAA). He doesn't do much other than sit around and make bubble tea. I guess he's kinda <br />
                                good at that.<br /><br />

                                2nd from the left is the man himself! Not the one that opened the restaurant but the man that wrote this<br />
                                amazing site that 2 people will probably look at. <br /><br />

                                Then we got the owners themselves. They took over and learned from a man whos probably 300 years old now <br />
                                They took over and expanded the buisness by catering to the college students, as well as keeping the specialness <br />
                                of eating raw fish. Since they took over, they expanded the restaurant twice. They continue to bring back their <br />
                                loyal customers and continue to hold the restarant name TOKYO EXPRESS high in the sky!!!!! <br /><br />

                                Please come by and eat some food! 
                                .</Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <div style={{paddingTop:"5em"}}></div>
            <ScrollToOrder/>
        </div>
    );
}

export default Story;