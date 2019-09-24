import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Navbar</Link >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/product-details/5d5804a75bb3ea27f8958aa5">Product</Link>
                    <Link className="nav-item nav-link" to="/">Pricing</Link>
                </div>
            </div>
        </nav>
    )
}


