import React from 'react';
import "./Login.css";
import { Link } from "react-router-dom";

class Login extends React.Component{
    state = {
        emailEntered: "",
        isemailVaild: true,
        passEntered: "",
        ispassVaild: true
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
        else if(emailEntered.length == 0){
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

    vaildatePass = passEntered => {
        var pass_pattern = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/;
        //비밀번호 형식이 맞으면 true 아니면 false
        if(passEntered.match(pass_pattern) != null){
            this.setState({
                ispassVaild : true,
                passEntered
            });
        }
        else if(passEntered.length == 0){
            this.setState({
                ispassVaild : true,
                passEntered
            });
        }
        else {
            this.setState({
                ispassVaild : false,
                passEntered
            });
        }
    }

    isEveryFieldValid = () => {
        const { isemailVaild, ispassVaild, emailEntered, passEntered } = this.state;
        return isemailVaild && ispassVaild && emailEntered.length>0 && passEntered.length>0;
    };

    renderSubmitBtn = () => {
        const {emailEntered} = this.state;
        if (this.isEveryFieldValid()) {
            return (
                <Link to = {{pathname:"/",
                    state:{emailEntered}
                }}>
                    <button type="submit" className="btn_login" id="btn_login">로그인</button>
                </Link>
            );
        }
        else{
            return (
                <button type="submit" className="btn_login" id="btn_login" disabled>로그인 아직</button>
            );
        }

      };

    render(){
        const {isemailVaild, ispassVaild} = this.state;
        return(
            <div className="Login" id="Login">
                <form className="LoginForm" id="LoginForm">
                    <div className="main-login">

                        <div className="login_letter" id="login_letter">
                            <h1>로그인을 하고 나면<br/>좋은 일만 있을 거예요.</h1>
                        </div>
                        
                        <div className="div_login" id="div_email">
                            <label className="login_label" htmlFor="input_email">이메일</label>
                            <input className="input_login" id="input_email" placeholder="이메일을 입력하세요." type="text"
                            onChange={e => this.vaildateEmail(e.target.value)}></input>
                            {isemailVaild ? "" : <div className="div_error" id="error_email">이메일 형식이 아닙니다.</div>}
                        </div>
                        
                        <div className="div_login" id="div_pass">
                            <label className="login_label" htmlFor="input_pass">비밀번호</label>
                            <input className="input_login" id="input_pass" placeholder="비밀번호를 입력하세요." type="password"
                            onChange={e => this.vaildatePass(e.target.value)}></input>
                            {ispassVaild ? "" : <div className="div_error" id="error_pass">영문,숫자 포함 8 자리이상 20자리 이하여야 합니다.</div>}
                        </div>
                        

                        <div className="div_loginbtn">
                            {this.renderSubmitBtn()}
                            <Link to = {{pathname:"/signup"}}>
                                <button className="btn_signup" id="btn_signup">회원가입</button>
                            </Link>
                        </div>
                    </div>
                </form>

                <div className="bar"></div>

                <div className="div_easy_login div_login">
                    <p className="easy_login_text">SNS 간편 로그인</p>
                    <img className="sns_img" id="kakao_login" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Kakao_logo.jpg"></img>
                    <img className="sns_img" id="google_id" src="https://i1.wp.com/kaist-valuecreator.com/wp-content/uploads/2019/09/25p_%EA%B5%AC%EA%B8%80%EB%A1%9C%EA%B3%A0-2.jpg?w=900&ssl=1"></img>
                </div>

                <div className="bar"></div>

                <div className="div_find div_login">
                    <div>
                        <p className="pass_find">비밀번호를 잊으셨나요?</p>
                        <Link to = {{pathname:"/"}}>
                            <p className="pass_find" id="pass_find">비밀번호 찾기</p>
                        </Link>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Login;