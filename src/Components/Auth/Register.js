import React, {Fragment, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {setAlert} from '../../Actions/alert';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../Actions/auth';

const Register = ({register,setAlert,isAuthenticated}) => {
	// usestate hook is replacement of this.state and this.setstate 
	
	const [formData, setData] = useState(
		{
			name : '',
			email:'',
			password:'',
			password2:''
		}
	);

	const{name,email,password,password2} = formData;

	const onChange = e => setData({...formData, [e.target.name] : e.target.value});

	const onSubmit = e => 
	{
		e.preventDefault();
		if (password !== password2) {
		  setAlert('Passwords do not match', 'danger');
		} else {
		  register({ name, email, password });
		}
	};
	
	if(isAuthenticated)
	{
		return(<Redirect to ="/dashboard" />)
	}
	return (
		<Fragment>
		<h1 className="large text-primary">
        Sign Up
      </h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name = "name" value = {name} onChange = {e => onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name = "email" value = {email} onChange = {e => onChange(e)}/>
          <small className="form-text">
            This site uses Gravatar, so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password"  name = "password" value = {password} onChange = {e => onChange(e)} />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm Password" name = "password2"  value = {password2} onChange = {e => onChange(e)} />
        </div>
        <input type="submit"  className="btn btn-primary"/>
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>		
		</Fragment>
	);
}

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state =>( 
{
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps,{ setAlert,register})(Register);

// problem is register function called when component is called