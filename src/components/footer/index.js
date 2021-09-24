import {React} from 'react';
import { 
    Card,
    Button,
    Row,
    Col,
    Container
} from 'react-bootstrap';

import {
Delivery32
} from '@carbon/icons-react'


import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {

    function goBackToOrder(){
        let orderurl = window.location.origin;
        orderurl = orderurl + '?scrollorder=scrolltoorder';
        window.location.href = orderurl;
    }

    return (
        <Card.Footer>
            <Container fluid>
                <Row style={{paddingTop:"0em"}}>
                    <Col sm={12} md={6} lg={4} style={{textAlign:'left'}}>
                        <p>Information: </p>
                        <p>Phone: (845)-857-3531</p>
                        <p>Address: 8 Lagrange Ave,Poughkeepsie NY, 12603</p>
                    </Col>

                    <Col sm={12} md={6} lg={4} style={{textAlign:'center', paddingTop:'3em'}}>
                        <p>© 2021 Corner 8 Tokyo Express Inc. All Rights Reserved </p>
                    </Col>

                    <Col sm={12} md={6} lg={4} style={{textAlign:'center',paddingTop:'2em'}}>
                    <Button class="btn" variant="primary" size="lg" onClick={goBackToOrder}>
                            Place an Order <Delivery32 />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Card.Footer>
    )
};
export default Footer;
