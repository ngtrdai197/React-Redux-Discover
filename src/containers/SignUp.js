import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup } from '../@store/actions';

function SignUp(props) {

    const [inputs, setInputs] = useState({ username: '', fullName: '', email: '', password: '', phone: '', address: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputs)
        const user = {
            "address": "Ha Noi",
            "email": "nguyendaidz@gmail.com",
            "fullName": "Nguyen Dai",
            "password": "Aloalo123",
            "phone": "0932142323",
            "username": "nguyendaidz",
        }
        props.signup(user);
        console.log(props.auth)
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
                            <label>Fullname</label>
                            <input type="text" name="fullName" onChange={handleChange} className="form-control" placeholder="Enter your Fullname" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" onChange={handleChange} className="form-control" placeholder="Enter your Email" />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" name="phone" onChange={handleChange} className="form-control" placeholder="Enter your Phone" />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="address" onChange={handleChange} className="form-control" placeholder="Enter your Address" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" onChange={handleChange} className="form-control" placeholder="Enter your Password" />
                        </div>
                        <button className="btn btn-block btn-primary">Sign up</button>
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
    return bindActionCreators({ signup: signup }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);