import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css'
import NavBar from './components/Nav/NavBar'
import ProductContainer from './containers/ProductContainer'
import ProductDetailsContainer from './containers/ProductDetailsContainer'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={ProductContainer} />
        <Route path="/product-details/:productId" component={ProductDetailsContainer} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
