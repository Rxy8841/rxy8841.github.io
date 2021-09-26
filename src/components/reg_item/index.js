import React from 'react';
import ReactDOM from 'react-dom'
import { 
    Row,
    Col,
    Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function createfooditems(foods) {
        return foods.map((foods) => {
            console.log(foods.name)
            return (
                <Col sm={12} md={6} lg={4} key={foods}> 
                    <p> {foods.name}   {foods.price}
                    <br />  
                    {foods.description} </p> 
                </Col>)
            });
        }

const Reg_item = (prop) => {
    return (
        <Container fluid>
            <Row style={{paddingBottom:"5em"}}>
                {createfooditems(prop.prop.items)}
            </Row>
        </Container>
    )
};
export default Reg_item;