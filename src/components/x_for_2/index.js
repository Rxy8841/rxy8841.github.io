import React from 'react';
import { 
    Row,
    Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function createfooditems(foods) {
        return foods.map((foods) => {
            return (
                <>
                <Row key={foods.name + 'd'} sm={12} md={6} lg={4}> 
                    <p key={foods.name + 'spaceholder'} style={{width:'30%',textAlign:'left', float:'left'}}> 
                    </p>
                    
                    <p key={foods.name} style={{fontSize:'20px', fontWeight: '500',width:'40%',textAlign:'center', float:'left',whiteSpace: 'nowrap'}}>   
                        {foods.name} - {foods.price}
                    </p>
                </Row>

                <Row sm={12} md={6} lg={4}>
                    <p key={foods.name + 'spaceholder'} style={{width:'30%',textAlign:'left', float:'left'}}> 
                    </p>

                    <p key={foods.description} style={{fontSize:'16px', fontWeight: '200',width:'40%',float:'left'}}> 
                        {foods.description} 
                    </p>
                    <p key={foods.description + '2'} style={{fontSize:'16px', fontWeight: '200',  width:'100%'}}> 
                        {foods.description2} 
                    </p>
                    <p key={foods.description + '3'} style={{fontSize:'16px', fontWeight: '200',  width:'100%'}}> 
                        {foods.description3} 
                    </p>
                    <p key={foods.description4 + '4'} style={{fontSize:'16px', fontWeight: '200', marginBottom:'2.5em', width:'100%'}}> 
                        {foods.description4} 
                    </p>
                </Row>
                </>
                )
            });
        }

const Xfor2 = (prop) => {
    return (
        <Container fluid>
            {createfooditems(prop.prop.items)}
        </Container>
    )
};
export default Xfor2;