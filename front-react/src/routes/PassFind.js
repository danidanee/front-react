import React from 'react';
import "./PassFind.css";
import { Link } from "react-router-dom";
import Hi from '../img/Hi.jpg';

class PassFind extends React.Component{

    state = {
        emailEntered: "",
        isemailVaild: true
    };

    vaildateEmail = emailEntered => {
        var email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,4}$/;
        //이메일 형식이 맞으면 true 아니면 false
        if(emailEntered.match(email_pattern) != null){
            this.setState({
                isemailVaild : true,
                emailEntered
            });
        }
        else if(emailEntered.length === 0){
            this.setState({
                isemailVaild : true,
                emailEntered
            });
        }
        else {
            this.setState({
                isemailVaild : false,
                emailEntered
            });
        }
    }

    isEveryFieldValid = () => {
        const { isemailVaild,emailEntered} = this.state;
        return isemailVaild && emailEntered.length>0;
    };

    renderSubmitBtn = () => {
        const {emailEntered} = this.state;
        if (this.isEveryFieldValid()) {

            return (
                <Link to = {{
                        pathname:"/passfindcomplete",
                        state:{
                            emailEntered,
                            emailresend : false
                        }
                    }}>
                    <button className="btn_passfind">→</button>
                </Link>
            );
        }
        else{
            return (
                <button className="btn_passfind" disabled>→</button>
            );
        }
    };

    render(){
        const {isemailVaild} = this.state;
        return(
            <div className="PassFind" id="PassFind">
                <form className="PassFindForm" id="PassFindForm">
                    <div className="main-login">

                        <div>
                            <div id="div_passfind_letter"><img id="Hi_logo" alt="Hi" src={Hi}></img></div>
                            <h1 className="passfind_letter">이메일을 입력해주세요.</h1>
                        </div>
                        
                        <div className="div_passfind">
                            <label className="passfind_label" htmlFor="input_email">이메일</label>
                            <input className="input_passfind" id="input_passfind" placeholder="이메일을 입력하세요." type="text"
                            onChange={e => this.vaildateEmail(e.target.value)}></input>
                            {this.renderSubmitBtn()}
                            
                        </div>
                        {isemailVaild ? "" : <div className="div_error" id="error_email">이메일 형식이 아닙니다.</div>}
                    </div>
                </form>
            </div>
        );
    }
}

export default PassFind;