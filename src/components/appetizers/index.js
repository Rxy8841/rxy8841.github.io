import {React} from 'react';
import { 
    Row,
    Col,
    Container
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const Appetizers = () => {
    return (
        <Container fluid>
            <Row style={{paddingBottom:"5em"}}>
                <Col sm={12} md={6} lg={3} style={{textAlign:'center'}}>
                    <p>Tuna Roll  $12 <br />  
                    Sushi roll with Tuna  :)
                    </p>
                        
                </Col>
                <Col sm={12} md={6} lg={3} style={{textAlign:'center'}}>
                    <p>Salmon Roll  $15 <br />  
                    Sushi roll with Salmon  :)
                    </p>    
                </Col>
                <Col sm={12} md={6} lg={3} style={{textAlign:'center'}}>
                    <p>Yellow Tail Roll  $15 <br />  
                    Sushi roll with Yellow Tail  :)
                    </p>    
                </Col>
                <Col sm={12} md={6} lg={3} style={{textAlign:'center'}}>
                    <p>Eel Roll  $15 <br />  
                    Sushi roll with Eel  :)
                    </p>      
                </Col>
            </Row>
        </Container>
    )
};
export default Appetizers;
