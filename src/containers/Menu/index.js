import {React, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import sushiboat from '../../static/sushiboat.jpg';
import '../Menu/index.css';
import Reg_item from '../../components/reg_item'
import app_kitchen_json from '../../static/appetizers_kitchen.json'


import { 
Container,
Row,
Col
} from 'react-bootstrap';

import {
    ChevronDown32
} from '@carbon/icons-react'


const MenuPage = () => {

    function SetupAccordian() {
        useEffect(() => {
            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.display === "block") {
                        panel.style.display = "none";
                    } else {
                        panel.style.display = "block";
                    }
                });
            }
        });
        return null
    }

    return (
        <div>
            <Container fluid>
                <Row style={{paddingTop:"0em"}}>
                    <Col sm={12} md={12} lg={12} style={{textAlign:'center', backgroundColor:'#D4BEAB'}}>
                        <div style={{width: '100%', height: '80%'}}>
                            <p style={{
                            position: 'absolute',
                            left:'50%',
                            transform:'translate(-50%)',
                            fontSize:'90px',
                            fontWeight: '900',
                            color: '#43C684'}}>
                                MENU
                            </p>
                            <img src={sushiboat} alt={'sushiboat'} style={{width: '50%', height: 'auto'}}></img>
                        </div>

                    </Col>
                </Row>


                <Row style={{paddingTop:"5em"}}>
                    <Col style={{textAlign:'center'}}>
                        <button className="accordion"> APPETIZERS  <ChevronDown32 /></button>
                        <div class="panel">
                            <Reg_item prop={app_kitchen_json}/>
                        </div>

                        <button class="accordion"> SUSHI & SASHIMI  <ChevronDown32 /></button>
                        <div class="panel">
                            
                        </div>

                        <button class="accordion"> KITCHEN FOOD  <ChevronDown32 /></button>
                        <div class="panel">
                            
                        </div>

                        <button class="accordion"> DRINKS  <ChevronDown32 /></button>
                        <div class="panel">
                           
                        </div>

                        <button class="accordion"> DESSERTS  <ChevronDown32 /></button>
                        <div class="panel">
                           
                        </div>
                    </Col>
                </Row>
            </Container>

            <div style={{paddingTop:"5em"}}></div>
            <SetupAccordian/>
        </div>
    );
}

export default MenuPage;