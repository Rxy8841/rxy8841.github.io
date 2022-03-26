import {React, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import sushiboat from '../../static/sushiboat.jpg';
import '../Menu/index.css';
import RegItem from '../../components/reg_item'
import Sashimiitem from '../../components/sashimi_items';
import Xfor2 from '../../components/x_for_2';

import app_kitchen_json from '../../static/menu_items/appetizers_kitchen.json'
import app_sushi_json from '../../static/menu_items/appetizers_sushi.json'
import salad_json from '../../static/menu_items/salad.json'
import soup_side_json from '../../static/menu_items/soup_side.json'
import regroll_json from '../../static/menu_items/cutrolls.json'
import sashimi_json from '../../static/menu_items/sashimi.json'
import vegeroll_json from '../../static/menu_items/veg_roll.json'
import sushi_entree from '../../static/menu_items/sushi_entree.json'
import xfor2 from '../../static/menu_items/xfor2.json';
import rollcomboset from '../../static/menu_items/roll_combo_set.json'
import teriyaki from '../../static/menu_items/teriyaki.json'
import temp_katsu from '../../static/menu_items/temp_katsu.json'
import traditional from '../../static/menu_items/traditional.json'
import hotpot from '../../static/menu_items/hotpot.json'
import noodle from '../../static/menu_items/noodle.json'
import tokyosecret from '../../static/menu_items/tokyo_secret.json'



import { 
Container,
Row,
Col
} from 'react-bootstrap';

import {
    ChevronDown32
} from '@carbon/icons-react'


const MenuPage = () => {

    const mainsection_size = "35px"
    const subsection_size = "26px"

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

                        {/* APPETIZERS ------------------------------------------------------------ */}
                        <button className="accordion" style={{fontSize:mainsection_size, fontWeight: '700'}}> APPETIZERS  <ChevronDown32 /></button>
                        <div class="panel">
                            {/* Kitchen apps ------------------------------------------------------------ */}
                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600'}}> Kitchen Apps  <ChevronDown32 /></button>
                            <div class="panel">
                                <RegItem prop={app_kitchen_json}/>
                            </div>

                            {/* Sushi bar apps ------------------------------------------------------------ */}
                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600'}}> Sushi Bar Apps  <ChevronDown32 /></button>
                            <div class="panel">
                                <RegItem prop={app_sushi_json}/>
                            </div>
                        </div>


                        {/* Soups Salads and Sides ------------------------------------------------------------ */}
                        <button className="accordion" style={{fontSize:mainsection_size, fontWeight: '700'}}> SALADS/ SOUP / SIDE  <ChevronDown32 /></button>
                        <div class="panel">
                            {/* Salads ------------------------------------------------------------ */}
                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600'}}> Salads  <ChevronDown32 /></button>
                            <div class="panel">
                                <RegItem prop={salad_json}/>
                            </div>

                            {/* Soups and Sides ------------------------------------------------------------ */}
                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600'}}> Soups & Sides  <ChevronDown32 /></button>
                            <div class="panel">
                                <RegItem prop={soup_side_json}/>
                            </div>
                        </div>


                        {/* Sushi and Sashmi ------------------------------------------------------------ */}
                        <button class="accordion" style={{fontSize:mainsection_size, fontWeight: '700'}}> SUSHI & SASHIMI  <ChevronDown32 /></button>
                        <div class="panel">
                            {/* A LA Carte ------------------------------------------------------------ */}
                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600'}}> A La Carte Sushi or Sashimi  <ChevronDown32 /></button>
                            <div class="panel" style={{paddingBottom:"2em"}}>
                                <Sashimiitem prop={sashimi_json}/> 
                                <p style={{ left:'50%', transform: 'translate(-50%, -50%)', position:'absolute', textAlign:'left'}}> 
                                    S.P = Special Pricing (Ask for daily pricing) <br/>
                                    --- = Only served as Sashimi
                                </p>
                            </div>
                            
                            {/* Regular Rolls ------------------------------------------------------------ */}
                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600'}}> Cut Rolls / HandRolls  <ChevronDown32 /></button>
                            <div class="panel">
                                <RegItem prop={regroll_json}/>
                            </div>


                            {/* Tokyo Special Rolls ------------------------------------------------------------ */}
                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600'}}> Tokyo Special Rolls  <ChevronDown32 /></button>
                            <div class="panel">
                                <Xfor2 prop={tokyosecret}/>
                            </div>

                            {/* Vege Rolls ------------------------------------------------------------ */}
                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600'}}> Vegetable rolls  <ChevronDown32 /></button>
                            <div class="panel">
                                <RegItem prop={vegeroll_json}/>
                            </div>
                        </div>


                        {/* Roll Combo Set ------------------------------------------------------------ */}
                        <button class="accordion" style={{fontSize:mainsection_size, fontWeight: '700'}}> SUSHI & SASHIMI COMBOS <ChevronDown32 /></button>
                        <div class="panel">

                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600'}}> X For 2  <ChevronDown32 /></button>
                            <div class="panel">
                                <div style={{paddingBottom:'4em', paddingTop:'2em'}} > 
                                    <p style={{ left:'50%', transform: 'translate(-50%, -50%)', position:'absolute', textAlign:'center'}}> 
                                        ***(Served with Miso Soup and House Salad) <br/>
                                        CC = Chef Choice  ***
                                    </p>
                                </div>
                                <Xfor2 prop={xfor2}/>
                            </div>

                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600', paddingBottom:'1em'}}> Sushi Entrees  <ChevronDown32 /></button>
                            <div class="panel">
                                <div style={{paddingTop:'2em'}} > 
                                    <p style={{ left:'50%', transform: 'translate(-50%, -50%)', position:'absolute', textAlign:'center'}}> 
                                        ***(Served with Miso Soup and House Salad) <br/>
                                        CC = Chef Choice  ***
                                    </p>
                                </div>
                                <div style={{paddingBottom:'6em'}}></div>
                                <RegItem prop={sushi_entree}/>
                            </div>

                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600'}}> Roll Combo Sets  <ChevronDown32 /></button>
                            <div class="panel">
                                <div style={{paddingTop:'2em', paddingBottom:'3em'}} > 
                                    <p style={{ left:'50%', transform: 'translate(-50%, -50%)', position:'absolute', textAlign:'center'}}> 
                                        ***(Served with Miso Soup and House Salad) <br/>
                                        CC = Chef Choice  ***
                                    </p>
                                </div>
                                <RegItem prop={rollcomboset}/>
                            </div>
                        </div>


                        <button class="accordion" style={{fontSize:mainsection_size, fontWeight: '700'}}> KITCHEN FOOD  <ChevronDown32 /></button>
                        <div class="panel">
                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600'}}> Teriyaki  <ChevronDown32 /></button>
                            <div class="panel">
                                <div style={{paddingBottom:'3em', paddingTop:'1em'}} > 
                                    <p style={{ left:'50%', transform: 'translate(-50%, -50%)', position:'absolute', textAlign:'center'}}> 
                                        ***(Served with Miso Soup or House Salad and Rice) *** <br />
                                        Comes with Onions, Broccoli, Carrot, and Teriyaki Sauce
                                    </p>
                                </div>
                                <RegItem prop={teriyaki}/>
                            </div>

                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600'}}> Tempura / Katsu  <ChevronDown32 /></button>
                            <div class="panel">
                                <div style={{paddingBottom:'3em', paddingTop:'1em'}} > 
                                    <p style={{ left:'50%', transform: 'translate(-50%, -50%)', position:'absolute', textAlign:'center'}}> 
                                        ***(Served with Miso Soup or House Salad and Rice) *** 
                                    </p>
                                </div>
                                <RegItem prop={temp_katsu}/>
                            </div>

                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600'}}> Traditional  <ChevronDown32 /></button>
                            <div class="panel">
                                <div style={{paddingBottom:'3em', paddingTop:'1em'}} > 
                                    <p style={{ left:'50%', transform: 'translate(-50%, -50%)', position:'absolute', textAlign:'center'}}> 
                                        ***(Served with Miso Soup or House Salad and Rice) ***
                                    </p>
                                </div>
                                <RegItem prop={traditional}/>
                            </div>

                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600'}}> Hot Pots  <ChevronDown32 /></button>
                            <div class="panel">
                                <div style={{paddingBottom:'2em', paddingTop:'1em'}} > 
                                    <p style={{ left:'50%', transform: 'translate(-50%, -50%)', position:'absolute', textAlign:'center'}}> 
                                        Noodle Soup Style
                                    </p>
                                </div>
                                <RegItem prop={hotpot}/>
                            </div>

                            <button className="accordion" style={{fontSize:subsection_size, fontWeight: '600'}}> Noodles  <ChevronDown32 /></button>
                            <div class="panel">
                                <div style={{paddingBottom:'3em', paddingTop:'2em'}} > 
                                    <p style={{ left:'50%', transform: 'translate(-50%, -50%)', position:'absolute', textAlign:'center'}}> 
                                        ***(Served with Miso Soup) *** <br />
                                        Japanese noodle with vegetables & stir fried w. sauce <br />
                                        Udon (thick Noodles) or Soba (Buck Wheat Noodles)
                                    </p>
                                </div>
                                <RegItem prop={noodle}/>
                            </div>
                        </div>

                        <button class="accordion" style={{fontSize:mainsection_size, fontWeight: '700'}}> DRINKS  <ChevronDown32 /></button>
                        <div class="panel">
                           
                        </div>

                        <button class="accordion" style={{fontSize:mainsection_size, fontWeight: '700'}}> DESSERTS  <ChevronDown32 /></button>
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