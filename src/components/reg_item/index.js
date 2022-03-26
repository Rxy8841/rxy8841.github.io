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
                    <p key={foods.name + 'spaceholder'} style={{width:'20%',textAlign:'left', float:'left'}}> 
                    </p>
                    
                    <p key={foods.name} style={{fontSize:'20px', fontWeight: '500',width:'50%',textAlign:'center', float:'left',whiteSpace: 'nowrap'}}>   
                        {foods.name} 
                    </p>

                    <p key={foods.price + foods.name} style={{fontSize:'20px', fontWeight: '200',width:'30%',textAlign:'right', float:'left'}}> 
                        {foods.price}
                    </p> 

                    <p key={foods.description} style={{fontSize:'16px', fontWeight: '200',marginBottom:'2.5em',textAlign:'center'}}> 
                        {foods.description} 
                    </p>

                </Col>)
            });
        }

const RegItem = (prop) => {
    return (
        <Container fluid>
            <Row style={{paddingBottom:"4em"}}>
                {createfooditems(prop.prop.items)}
            </Row>
        </Container>
    )
};
export default RegItem;