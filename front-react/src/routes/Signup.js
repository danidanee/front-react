import React from 'react';
import "./Signup.css";

class Signup extends React.Component{
    state = {};

    render(){
        return(
            <div className="user" id="signup">
                <div className="login_letter" id="login_letter">
                    <h1>로그인을 하고 나면<br/>좋은 일만 있을 거예요.</h1>
                </div>
            </div>
        );
    }
}

export default Signup;