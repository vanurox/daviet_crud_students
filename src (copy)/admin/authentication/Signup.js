import React, { Component } from 'react';
import '../../css/style.css'
import {Link} from 'react-router-dom';
import '../../font-awsome/css/font-awesome.min.css';
import signup from '../../images/signup-image.jpg';

class Signup extends Component {
    render() {
        return (
            <div className="main">

             <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name"><i class="fa fa-lock"></i></label>
                                    <input type="text" className="name" id="name" placeholder="Your Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i class="fa fa-envelope"></i></label>
                                    <input type="email" className="email" id="email" placeholder="Your Email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i class="fa fa-lock"></i></label>
                                    <input type="password" className="pass" id="pass" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re-pass"><i class="fa fa-lock"></i></label>
                                    <input type="password" className="re_pass" id="re_pass" placeholder="Repeat your password"/>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox"  id="agree-term" className="agree-term" />
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in Terms and Services</label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={signup} alt="sing up image"/></figure>
                         <Link to="/Login"> I am already member</Link>
                        </div>
                    </div>
                </div>
            </section> 
    
            
           
        </div>
        );
    }
}

export default Signup;