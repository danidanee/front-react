import React from 'react';
import "./Signup.css";
import { Link } from "react-router-dom";

class Signup extends React.Component{
    
    state = {
        nameEntered: "",
        isnameVaild: true,
        emailEntered: "",
        isemailVaild: true,
        passEntered: "",
        ispassVaild: true,
        passconfirmEntered: "",
        ispassconfirmVaild: true,
        phoneEntered: "",
        isphoneVaild: true,
        addressEntered: "",
        checked: false 
    };

    vaildateName = nameEntered => {

        var name_check = "중복";

        if(nameEntered !== name_check){
            this.setState({
                isnameVaild : true,
                nameEntered
            });
        }
        else if(nameEntered.length === 0){
            this.setState({
                isnameVaild : true,
                nameEntered
            });
        }
        else {
            this.setState({
                isnameVaild : false,
                nameEntered
            });
        }
    }

    vaildateEmail = emailEntered => {
        var email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,4}$/;
        //이메일 형식이 맞으면 true 아니면 false
        if(emailEntered.match(email_pattern) !== null){
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

    vaildatePass = passEntered => {
        var pass_pattern = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/;
        //비밀번호 형식이 맞으면 true 아니면 false
        if(passEntered.match(pass_pattern) != null){
            this.setState({
                ispassVaild : true,
                passEntered
            });
        }
        else if(passEntered.length === 0){
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

    vaildatePassConfirm = passconfirmEntered => {
        const { passEntered } = this.state;
        if(passconfirmEntered === passEntered){
            this.setState({
                ispassconfirmVaild : true,
                passconfirmEntered
            });
        }
        else if(passconfirmEntered.length === 0){
            this.setState({
                ispassconfirmVaild : true,
                passconfirmEntered
            });
        }
        else {
            this.setState({
                ispassconfirmVaild : false,
                passconfirmEntered
            });
        }
    }

    //https://webprogrammer.tistory.com/1479
    vaildatePhone = phoneEntered => {
        var phone_pattern = /(01[016789])(\d{4})\d{4}$/g; 
        
        //형식이 맞으면 true 아니면 false
        if(phoneEntered.match(phone_pattern) != null){
            this.setState({
                isphoneVaild : true,
                phoneEntered
            });
        }
        else if(phoneEntered.length === 0){
            this.setState({
                isphoneVaild : true,
                phoneEntered
            });
        }
        else {
            this.setState({
                isphoneVaild : false,
                phoneEntered
            });
        }
    }

    address = addressEntered => {
        this.setState({
            addressEntered
        });
    }

    checkedfunction = () =>{
        this.setState({
            checked : !this.state.checked
        });
    }

    isEveryFieldValid = () => {
        const { isnameVaild, isemailVaild, ispassVaild, ispassconfirmVaild, isphoneVaild, checked, nameEntered,emailEntered, passEntered,passconfirmEntered,phoneEntered,addressEntered } = this.state;
        
        //console.log(isnameVaild, isemailVaild, ispassVaild, ispassconfirmVaild, isphoneVaild, checked, nameEntered,emailEntered, passEntered,passconfirmEntered,phoneEntered,addressEntered);
        
        return isnameVaild && isemailVaild && ispassVaild && ispassconfirmVaild && isphoneVaild && checked && nameEntered.length>0 && emailEntered.length>0  && passEntered.length>0 && passconfirmEntered.length>0 && phoneEntered.length>0 && addressEntered.length>0;
    };

    renderSubmitBtn = () => {
        const {nameEntered,emailEntered, passEntered,passconfirmEntered,phoneEntered,addressEntered} = this.state;
        
        if (this.isEveryFieldValid()) {
            return (
                <Link to = {{pathname:"/",state:{
                    nameEntered,
                    emailEntered,
                    passEntered,
                    passconfirmEntered,
                    phoneEntered,
                    addressEntered
                }}}>
                    <button className="btn_signup" id="btn_signup">회원가입</button>
                </Link>
            );
        }
        else{
            return (
                <button className="btn_signup" id="btn_signup" onClick={this.signup_btn}>회원가입</button>
            );
        }
    };

    signup_btn(){
        alert('모든 항목을 입력해주세요');
    }

    render(){

        const {isnameVaild, isemailVaild, ispassVaild, ispassconfirmVaild, isphoneVaild} = this.state;

        return(
            <div className="Signup" id="signup">
                <div className="div_signup_letter">
                    <img className="signup_letter" id="signup_logo" alt="logo"src="https://dnvefa72aowie.cloudfront.net/origin/etc/201708/b1ae556883f38d116dd2d5ced0af232ebd3f35e3b2535fef1080a975f8c4a477.png"></img>
                    <h1 className="signup_letter" id="signup_title">회원 가입</h1>
                    <img className="signup_letter" id="signup_logo" alt="logo"src="https://dnvefa72aowie.cloudfront.net/origin/etc/201708/b1ae556883f38d116dd2d5ced0af232ebd3f35e3b2535fef1080a975f8c4a477.png"></img>
                </div>

                <div className="SignupForm" id="SignupForm">

                    <div className="div_signup" id="div_signup">
                        <label className="signup_label" htmlFor="input_email">닉네임</label>
                        <input className="input_signup" id="input_email" placeholder="닉네임을 입력하세요." type="text"
                        onChange={e => this.vaildateName(e.target.value)}></input>
                        {isnameVaild ? "" : <div className="div_error" id="error_name">중복된 닉네임 입니다.</div>}
                    </div>

                    <div className="div_signup" id="div_email">
                        <label className="signup_label" htmlFor="input_email">이메일</label>
                        <input className="input_signup" id="input_email" placeholder="이메일을 입력하세요." type="text"
                        onChange={e => this.vaildateEmail(e.target.value)}></input>
                        {isemailVaild ? "" : <div className="div_error" id="error_email">이메일 형식이 아닙니다.</div>}
                    </div>
                            
                    <div className="div_signup" id="div_pass">
                        <label className="signup_label" htmlFor="input_pass">비밀번호</label>
                        <input className="input_signup" id="input_pass" placeholder="비밀번호를 입력하세요." type="password"
                        onChange={e => this.vaildatePass(e.target.value)}></input>
                        {ispassVaild ? "" : <div className="div_error" id="error_pass">영문, 숫자 또는 특수기호 포함 8 자리이상 20자리 이하여야 합니다.</div>}
                    </div>

                    <div className="div_signup" id="div_pass">
                        <label className="signup_pass_label" htmlFor="input_pass_confirm">비밀번호<br/>확인</label>
                        <input className="input_signup" id="input_pass" placeholder="비밀번호를 한번 더 입력하세요." type="password"
                        onChange={e => this.vaildatePassConfirm(e.target.value)}></input>
                        {ispassconfirmVaild ? "" : <div className="div_error" id="error_pass">비밀번호가 일치하지 않습니다.</div>}
                    </div>

                    <div className="div_signup" id="div_pass">
                        <label className="signup_label" htmlFor="input_pass">번호</label>
                        <input className="input_signup" id="input_phone" placeholder="핸드폰 번호를 입력하세요." type="text" maxLength="11"
                        onChange={e => this.vaildatePhone(e.target.value)}></input>
                        {isphoneVaild ? "" : <div className="div_error" id="error_phone">핸드폰 번호 형식이 아닙니다.</div>}
                    </div>

                    <div className="div_signup" id="div_pass">
                        <label className="signup_label" htmlFor="input_pass">주소</label>
                        <input className="input_signup" id="input_pass" placeholder="주소를 입력하세요." type="text"
                        onChange={e => this.address(e.target.value)}></input>
                    </div>

                    <div className="signup_check">
                        <div className="div_signup_agree">
                            <input className="signup_agree" id="signup_agree" type="checkbox"
                            onChange={e => this.checkedfunction()}></input>
                            <label htmlFor="signup_agree" className="label_signup_agree"><em></em>약관을 동의합니다.</label>
                            <span className="signup_agree_popup">약관보기</span>                        
                        </div>

                        <div className="div_signupbtn">
                            {this.renderSubmitBtn()}
                            <Link to = {{pathname:"/"}}>
                                <button className="btn_signup" id="btn_main">취소</button>
                            </Link>
                        </div> 
                    </div>
                </div>    
                
            </div>
        );
    }
}

export default Signup;