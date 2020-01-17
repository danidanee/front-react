<h1>1. 와이어 프레임 작성</h1>
- 제작이 필요한 페이지를 AdobeXD를 활용해 와이어 프레임 작성
- 로그인, 회원가입, 비밀번호 변경/찾기, 예외 페이지 와이퍼 프레임



<div>
    <h3>
        - 로그인 와이어 프레임
    </h3>
    <div>
        <img src="https://github.com/danidanee/front-react/blob/master/img/login1.png?raw=true" width="150px">
        <img src="https://github.com/danidanee/front-react/blob/master/img/login2.png?raw=true" width="150px">
        <img src="https://github.com/danidanee/front-react/blob/master/img/login3.png?raw=true" width="150px">
    </div>
</div>






<div>
    <h3>
        - 회원가입 와이어 프레임
    </h3>
    <div>
        <img src="https://github.com/danidanee/front-react/blob/master/img/singup1.png?raw=true" width="150px">
        <img src="https://github.com/danidanee/front-react/blob/master/img/signup2.png?raw=true" width="150px">
        <img src="https://github.com/danidanee/front-react/blob/master/img/signup3.png?raw=true" width="150px">
        <img src="https://github.com/danidanee/front-react/blob/master/img/signup4.png?raw=true" width="150px">
    </div>
</div>



<div>
    <h3>
        - 비밀번호 변경/찾기
    </h3>
    <div>
        <img src="https://github.com/danidanee/front-react/blob/master/img/pass1.png?raw=true" width="150px">
        <img src="https://github.com/danidanee/front-react/blob/master/img/pass2.png?raw=true" width="150px">
        <img src="https://github.com/danidanee/front-react/blob/master/img/pass3.png?raw=true" width="150px">
    </div>
</div>





<div>
    <h3>
        - 예외 페이지 와이어 프레임
    </h3>
    <div>
        <img src="https://github.com/danidanee/front-react/blob/master/img/notfound.png?raw=true" width="150px">
        <img src="https://github.com/danidanee/front-react/blob/master/img/error.png?raw=true" width="150px">
    </div>
</div>





<h1>2. 로그인 화면</h1>
- html 작성 및 CSS 컴포넌트 제작 - 반응형으로 제작
- Frontend 로그인 페이지 UI, UX 반영

<div>
    <div>
        <img src="https://github.com/danidanee/front-react/blob/master/img/login_web1.PNG?raw=true" width="550px" height="300px">
        <img src="https://github.com/danidanee/front-react/blob/master/img/login_web2.PNG?raw=true" width="150px" height="300px">
    </div>
</div>

```css
@media (min-width:800px) {
  .div_login, .div_loginbtn, .bar, .div_login_letter {
      max-width: 400px;
      width: 100%;
      margin:0 auto;
  }
}
```



- 첫글자 대문자 되는 현상 방지

```css
text-transform: lowercase;
```



- 이메일 형식 입력 및 비밀번호 입력 기준 충족 시 '로그인' 버튼 활성화 및 페이지 이동

```javascript
isEveryFieldValid = () => {
        const { isemailVaild, ispassVaild, emailEntered, passEntered } = this.state;
        return isemailVaild && ispassVaild && emailEntered.length>0 && passEntered.length>0;
    };

    renderSubmitBtn = () => {
        const {emailEntered} = this.state;
        if (this.isEveryFieldValid()) {
            return (
                <Link to = {{pathname:"/",
                    state:{emailEntered}}}>
                    <button type="submit" className="btn_login" id="btn_login">로그인</button>
                </Link>
            );
        }
        else{
            return (
                <button type="submit" className="btn_login" id="btn_login" disabled>로그인</button>
            );
        }
    };
```

- 이메일과 비밀번호 형식이 기준과 맞지 않을 경우 알림 문구 표시

<div>
    <div>
        <img src="https://github.com/danidanee/front-react/blob/master/img/login_web3.PNG?raw=true" width="150px"/>
        <img src="https://github.com/danidanee/front-react/blob/master/img/login_web4.PNG?raw=true" width="150px"/>
    </div>
</div>

```javascript
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
                            {ispassVaild ? "" : <div className="div_error" id="error_pass">영문, 숫자 또는 특수기호 포함 8 자리이상 20자리 이하여야 합니다.</div>}
                        </div>
```

```javascript
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
```



- 회원가입 링크와 비밀번호 찾기 링크 연결

```javascript
<Link to = {{pathname:"/signup"}}>
                                <button className="btn_signup" id="btn_signup">회원가입</button>
                            </Link>
```

```javascript
<Link to = {{pathname:"/passfind"}}>
                            <p className="pass_find" id="pass_find">비밀번호 찾기</p>
                        </Link>
```



<h1>3. 회원가입 화면</h1>
- 이메일/패스워드 기반의 유저 가입 기능 구현
- 이메일, 패스워드 형식 확인 (로그인과 코드 동일)
- 닉네임 중복 확인 및 패스워드 일치여부, 핸드폰 형식 확인
- 약관 버튼 UI 변경

<div>
    <div>
        <img src="https://github.com/danidanee/front-react/blob/master/img/signup_web1.PNG?raw=true" width="150px"/>
        <img src="https://github.com/danidanee/front-react/blob/master/img/signup_web2.PNG?raw=true" width="150px"/>
        <img src="https://github.com/danidanee/front-react/blob/master/img/signup_web3.PNG?raw=true" width="150px"/>
    </div>
</div>

```javascript
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
```

- 가입 버튼 클릭시 모든 사항이 올바르게 입력되면 가입 완료 처리 및 이동
- 입력 값이 기준을 충족하지 않을 경우 alert 창으로 알림

<div>
    <div>
        <img src="https://github.com/danidanee/front-react/blob/master/img/signup_web4.PNG?raw=true" width="150px"/>
    </div>
</div>

```javascript
isEveryFieldValid = () => {
        const { isnameVaild, isemailVaild, ispassVaild, ispassconfirmVaild, isphoneVaild, checked, nameEntered,emailEntered, passEntered,passconfirmEntered,phoneEntered,addressEntered } = this.state;
        return isnameVaild && isemailVaild && ispassVaild && ispassconfirmVaild && isphoneVaild && checked && nameEntered.length>0 && emailEntered.length>0  && passEntered.length>0 && passconfirmEntered.length>0 && phoneEntered.length>0 && addressEntered.length>0;
    };

    renderSubmitBtn = () => {
        const {nameEntered,emailEntered, passEntered,passconfirmEntered,phoneEntered,addressEntered} = this.state;
        
        if (this.isEveryFieldValid()) {
            return (
                <Link to = {{pathname:"/login",state:{
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
```

```javascript
    signup_btn(){
        alert('모든 항목을 입력해주세요');
    }
```

```css
input[id = "signup_agree"] {
    display: none;
}
input[id = "signup_agree"] + label em {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url(../img/bg_chkbox.gif) 0 0 no-repeat;
    vertical-align: middle;
    margin-right: 5px;
}

input[id = "signup_agree"]:checked + label em {
    background-position: -38px 0;
}
```



<h1>4. 비밀번호 변경, 삭제</h1>
- 이메일 입력 값이 형식에 맞지 않을 경우 알림 문구 표시 및 확인 버튼 비활성화 (위의 코드 참고)

- 확인 버튼 클릭 시 다음 화면으로 이동

<div>
    <div>
        <img src="https://github.com/danidanee/front-react/blob/master/img/pass_web1.PNG?raw=true" width="150px"/>
        <img src="https://github.com/danidanee/front-react/blob/master/img/pass_web2.PNG?raw=true" width="150px"/>
    </div>
</div>

```javascript
<Link to = {{
	pathname:"/passfindcomplete",
	state:{emailEntered}
}}>
	<button className="btn_passfind">→</button>
</Link>
```

- 페이지 이동 시 입력한 이메일 값 화면에 표시
- 이메일 재입력 버튼 클릭해 페이지 이동시 이전에 입력되어있던 값 표시

<div>
    <div>
        <img src="https://github.com/danidanee/front-react/blob/master/img/pass_web3.PNG?raw=true" width="150px"/>
        <img src="https://github.com/danidanee/front-react/blob/master/img/pass_web4.PNG?raw=true" width="150px"/>
    </div>
</div>

```javascript
componentDidMount(){
        const {location} = this.props;

        if(location.state !== undefined){
            this.setState ({
                emailEntered : location.state
            });
        }
    }
```

```html
<input className="input_passfind" id="input_passfind" placeholder="이메일을 입력하세요." type="text" value={this.state.emailEntered}
                            onChange={e => this.vaildateEmail(e.target.value)}></input>
```

```html
<span className="span_complete">{location.state.emailEntered} 님</span>
```



<h1>5. 예외 페이지 제작</h1>
- 웹페이지 오류 발생 시 error 페이지 이동
- 직전 페이지로 이동할 수 있는 버튼 배치
- 존재하지 않는 URL 요청 시 Page Not Found 페이지 이동

<div>
    <div>
        <img src="https://github.com/danidanee/front-react/blob/master/img/error_web2.PNG?raw=true" width="150px"/>
        <img src="https://github.com/danidanee/front-react/blob/master/img/error_web1.PNG?raw=true" width="150px"/>
    </div>
</div>

```javascript
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} component={Main}>
          <Navigation/>
        </Route>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/passfind" component={PassFind} />
        <Route path="/passfindcomplete" component={PassFindComplete} />
        <Route path="/error" component={Error} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}
```

```javascript
componentDidMount(){
	const {location, history} = this.props;

	if(location.state === undefined){
		history.push("/error");
	}
}
```

```javascript
<h5 className="Error_h5_back" onClick={this.goback.bind(this)}>뒤로가기</h5>
```

