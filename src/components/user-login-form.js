import React, { useState } from 'react';

const UserLoginForm = () => {
    
    const [formValues, setFormValues] = useState({
        email: '',
      password: ''
    });

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
    }
/*
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(formValues);
    }

    const handleLogin = async ( formValues ) => {
        await identity.login({
          email: formValues.email,
          password: formValues.password
        })
        .catch((e) => {
            console.log(e);
        });
    }
*/

    return (
        <div className="image_css" >
        <div className="groove">
            <nav className="form_header">
                <a href="#" className="red">red</a>
                <a href="#" className="yellow">minimize</a>
                <a href="#" className="green">maximize</a>
                <h3>User Login</h3>
            </nav>
            <form className="form">
                <div className="nice-input ">  
                    <div className="right-inner-addon ">
                        <li className="profile"><i href="#non"></i>&#160;</li>
                        <input className="input_username" type="text" placeholder="Email" name="email" data-name="Name" onChange={handleInputChange} value={formValues.email} />
                    </div>  
                    <div className="right-inner-addon ">
                        <li className="lock"><i href="#non"></i>&#160;</li>
                            <input className="input_password" type="text" placeholder="Password" name="password" onChange={handleInputChange} value={formValues.password} required="required" />
                    </div>  
                </div>   	  
                <input className="button_signin" type="submit" value="Sign In" data-wait="Please wait..." />
            </form>
        </div>	  
    </div>
    )
}

export default UserLoginForm