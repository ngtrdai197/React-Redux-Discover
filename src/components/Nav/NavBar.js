import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

let flag = true;

function NavBar(props) {
    console.log(props);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Navbar</Link >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/product-details/sfsfms29324">Product</Link>
                    <Link className="nav-item nav-link" to="/">Pricing</Link>
                </div>
            </div>
            <span>{check()}: {props.shareReducer.count}</span>
        </nav>
    )
}

function check() {
    return flag = flag ? 'True' : 'False';
}

const mapStateToProps = (state) => ({
    shareReducer: state.shareReducer
})

export default connect(mapStateToProps, null)(NavBar);


