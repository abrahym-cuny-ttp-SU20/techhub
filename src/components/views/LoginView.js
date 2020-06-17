import React from 'react';

const LoginView = (props) => {
    return (
        <div id="login">
            <div className="logo">
                <div>Login</div>
                <div className="oauth">
                    <div className="google-auth"></div>
                    <div className="twitter-auth"></div>
                    <div className="facebook-auth"></div>
                    <div className="github-auth"></div>
                </div>
                <form>
                    <div className="email">
                        <input type="email" name="Email" placeholder="Email Address"/>
                    </div>
                    <div>
                        <input type="password" name="name" placeholder="Password"/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default LoginView;