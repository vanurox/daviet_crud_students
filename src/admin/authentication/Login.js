import React, { Component } from 'react';
import '../../css/style.css'
import { Link } from 'react-router-dom';
import login from '../../images/signin-image.jpg';
import { SocialIcon } from 'react-social-icons';
import '../../font-awsome/css/font-awesome.min.css';
import cookies from 'react-cookies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../common/Loader';
import Helper from '../../common/Helper';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loader: false
        };
    }

    showErrorNotification = (msg) => {
        toast.error(msg)
    };


    changeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }


    toggleLoader = () => {
        this.setState({
            loader: !this.state.loader
        });
    }

    login = () => {
        this.toggleLoader();
        let user = {
            email: this.state.email,
            password: this.state.password
        };

            Helper('login','POST', user)
            .then((res) => {
                if (res.msg === "unable to login") {
                    this.showErrorNotification("Wrong Email/Password");
                } else {
                    cookies.save('access_token', res.access_token);
                    this.props.history.push("/admin/");
                }
            })
            .catch((err) => {
                console.log(`Error while login ${err}`);
            })
            .finally(() => {
                this.toggleLoader();
            })
    }

    render() {
        return (
            <div className="main">
                <ToastContainer />
                <Loader loader={this.state.loader} />
                <section className="sign-in">
                    <div className="container">
                        <div className="signin-content">
                            <div className="signin-image">
                                <figure><img src={login} alt="sing up image" /></figure>
                                <Link to="/Signup" className="signup-image-link">Create an account</Link>
                            </div>

                            <div className="signin-form">
                                <h2 className="form-title">Sign In</h2>
                                <form method="POST" className="register-form" id="login-form">
                                    <div className="form-group">
                                        <label htmlFor="your_name"><i className="fa fa-envelope"></i></label>
                                        <input type="text" name="your_name" id="email" placeholder="Email"
                                            onChange={
                                                (e) => {
                                                    this.changeInput(e)
                                                }
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="your_pass"><i className="fa fa-lock"></i></label>
                                        <input type="password" name="your_pass" id="password" placeholder="Password"
                                            onChange={
                                                (e) => {
                                                    this.changeInput(e)
                                                }
                                            }
                                        />
                                    </div>
                                    {/* <div className="form-group">
                                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                    <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                                </div> */}
                                    <div className="form-group form-button">
                                        <input type="button"
                                            onClick={this.login}
                                            name="signin" id="signin" className="form-submit" value="Log in" />
                                    </div>
                                </form>
                                <div className="social-login">
                                    <span className="social-label">Or login with</span>
                                    <ul className="socials">
                                        <li><SocialIcon url="http://facebook.com/" /></li>
                                        <li><SocialIcon url="http://instagram.com/" /></li>
                                        <li><SocialIcon url="http://twitter.com/" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        );
    }
}

export default Login;