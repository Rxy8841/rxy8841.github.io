import './App.css';
import React from 'react';
import Navigationbar from '../../components/navbar';
import Footer from '../../components/footer';
import Homepage from '../homepage';
import MenuPage from '../Menu';
import Story from '../story'
import{
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom"

const App = () => {
  return (
    <>
    <Router>
      <Navigationbar />

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>


        <Route path="/menu">
          <MenuPage />
        </Route>


        <Route path="/story">
          <Story />
        </Route>


      </Switch>
      <Footer />
    </Router>
    </>
  )
}

export default App;
