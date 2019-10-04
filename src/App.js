import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css'
import NavBar from './components/Nav/NavBar'
import Footer from './components/Footer/Footer'

const SignUpComponent = React.lazy(() => import('./containers/SignUp'));
const LoginComponent = React.lazy(() => import('./containers/Login'));
const ProductDetailsContainer = React.lazy(() => import('./containers/ProductDetailsContainer'));
const ProductContainer = React.lazy(() => import('./containers/ProductContainer'));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading ...</div>}>
          <NavBar />
          <Route exact path="/" component={ProductContainer} />
          <Route path="/product-details/:productId" component={ProductDetailsContainer} />
          <Route path="/auth/signup" component={SignUpComponent} />
          <Route path="/auth/login" component={LoginComponent} />
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
