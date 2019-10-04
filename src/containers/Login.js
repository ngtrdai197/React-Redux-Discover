import React, { useState } from 'react';
import { withRouter, Redirect } from "react-router-dom"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../@store/actions';

function Login(props) {

    const [inputs, setInputs] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputs)
        const user = {
            "password": "Aloalo123",
            "username": "nguyendaidz"
        }
        props.login(user);
    }

    if (props.auth.data && props.auth.data.token) {
        return <Redirect to="/" />;
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" name="username" onChange={handleChange} className="form-control" placeholder="Enter your username" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" onChange={handleChange} className="form-control" placeholder="Enter your Password" />
                        </div>
                        <button className="btn btn-block btn-primary" onClick={() => handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.authReducer
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ login: login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));