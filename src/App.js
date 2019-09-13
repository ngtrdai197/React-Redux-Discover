import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css'
import NavBar from './components/Nav/NavBar'
import ListProduct from './container/List-Product/ListProduct'
import ProductDetails from './container/Product-Details/ProductDetails'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={ListProduct} />
        <Route path="/product-details/:productId" component={ProductDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
