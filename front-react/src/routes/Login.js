import React from 'react';
import "./Login.css";

class Login extends React.Component{
    state = {};

    render(){
        return(
            <div className="user" id="login" >
            <div className="wrapC">
            <h1 >로그인을 하고 나면 <br/>좋은 일만 있을 거예요.</h1>


            <div className="input-with-label">
            <label htmlFor="email">이메일</label>
                <input v-model="email" 
                       id="email" placeholder="이메일을 입력하세요."
                       type="text"/>
                <div className="error-text" v-if="error.email">

                </div>
            </div>

            <div className="input-with-label">
                <input v-model="password" type="password"
                       id="password"
                       placeholder="비밀번호를 입력하세요."/>
                <label htmlFor="password">비밀번호</label>
                <div className="error-text" v-if="error.password">
                </div>
            </div>
            <button className="btn btn--back btn--login" >
                로그인
            </button>


            <div className="sns-login">
                <div className="text">
                    <p>SNS 간편 로그인</p>
                    <div className="bar"></div>
                </div>

            </div>
            <div className="add-option">
                <div className="text">
                    <p>혹시</p>
                    <div className="bar"></div>
                </div>
                <div className="wrap">
                    <p>비밀번호를 잊으셨나요?</p>
                    <router-link  className="btn--text">비밀번호 찾기</router-link>
                </div>
                <div className="wrap">
                    <p>아직 회원이 아니신가요?</p>
                    <router-link className="btn--text">가입하기</router-link>
                </div>
            </div>
        </div>

    </div>
        );
    }
}

export default Login;