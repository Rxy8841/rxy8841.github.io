import React from 'react';
import { 
    Row,
    Col,
    Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function createfooditems(foods) {
        return foods.map((foods) => {
            return (
                <Col key={foods.name + 'd'} sm={12} md={6} lg={4}> 
                    <p key={foods.name + 'spaceholder'} style={{width:'8%',textAlign:'left', float:'left'}}> 
                    </p>
                    
                    <p key={foods.name} style={{fontSize:'20px', fontWeight: '500',width:'40%',textAlign:'center', float:'left',whiteSpace: 'nowrap'}}>   
                        {foods.name} 
                    </p>

                    <p key={foods.price_su + foods.name} style={{fontSize:'20px', fontWeight: '200',width:'25%',textAlign:'right', float:'left'}}> 
                        {foods.price_su}
                    </p> 

                    <p key={foods.price_sa + foods.name} style={{fontSize:'20px', fontWeight: '200',width:'25%',textAlign:'right', float:'left'}}> 
                        {foods.price_sa}
                    </p> 
                </Col>)
        });
        }
        

const Sashimi_item = (prop) => {
    return (
        <Container fluid>
            <Row style={{paddingBottom:"0em"}}>
                <Col sm={12} md={6} lg={4} >
                    <p style={{fontSize:'15px', fontWeight: '200',width:'20%',textAlign:'center', float:'right'}}>
                        Sashimi <br/> (No Rice) <br/>(Per Order)
                    </p>
                    <p style={{fontSize:'15px', fontWeight: '200',width:'20%',textAlign:'center', float:'right'}}>
                        Sushi <br/> (w/ Rice) <br/>(Per Piece)
                    </p>
                </Col>
                <Col sm={2} md={6} lg={4} className="d-none d-md-block">
                    <p style={{fontSize:'15px', fontWeight: '200',width:'20%',textAlign:'center', float:'right'}}>
                        Sashimi <br/> (No Rice) <br/>(Per Order)
                    </p>
                    <p style={{fontSize:'15px', fontWeight: '200',width:'20%',textAlign:'center', float:'right'}}>
                        Sushi <br/> (w/ Rice) <br/>(Per Piece)
                    </p>
                </Col>
                <Col sm={1} lg={4} className="d-none d-lg-block">
                    <p style={{fontSize:'15px', fontWeight: '200',width:'20%',textAlign:'center', float:'right'}}>
                        Sashimi <br/> (No Rice) <br/>(Per Order)
                    </p>
                    <p style={{fontSize:'15px', fontWeight: '200',width:'20%',textAlign:'center', float:'right'}}>
                        Sushi <br/> (w/ Rice) <br/>(Per Piece)
                    </p>
                </Col>
            </Row>
            <Row style={{paddingBottom:"2em"}}>
                {createfooditems(prop.prop.items)}
            </Row>
        </Container>
    )
};
export default Sashimi_item;