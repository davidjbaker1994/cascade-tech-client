import React from 'react'

const UserLoginForm = () => (
    <div className="image_css" >
        <div className="groove">
            <nav className="form_header">
                <a href="#" class="red">red</a>
                <a href="#" class="yellow">minimize</a>
                <a href="#" class="green">maximize</a>
                <h3>User Login</h3>
            </nav>
            <div class="form">
                <div class="nice-input ">  
                    <div class="right-inner-addon ">
                        <li class="profile"><i href="#non"></i>&#160;</li>
                        <input class="input_username" type="text" placeholder="Username" name="name" data-name="Name" />
                    </div>  
                    <div class="right-inner-addon ">
                        <li class="lock"><i href="#non"></i>&#160;</li>
                            <input class="input_password" type="text" placeholder="Password" required="required" />
                    </div>  
                </div>   	  
                <input class="button_signin" type="submit" value="Sign In" data-wait="Please wait..." />
            </div>
        </div>	  
    </div>
)

export default UserLoginForm