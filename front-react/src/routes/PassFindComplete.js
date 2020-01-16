import React from 'react';
import "./PassFindComplete.css";
import { Link } from "react-router-dom";
import Welcome from '../img/Welcome.jpg';

class PassFindComplete extends React.Component{

    componentDidMount(){
        const {location, history} = this.props;

        console.log(this.props);

        if(location.state === undefined){
            history.push("/error");
        }
    }

    render(){
        const {location} = this.props;
        if(location.state) {
        return(
            <div className="PassFindcomplete" id="PassFind">
                    <div className="main-login">

                        <div>
                            <div id="div_passfindcomplete_letter"><img id="Welcome_logo" alt="Welcome" src={Welcome}></img></div>
                             <span className="span_complete">{location.state.emailEntered} 님</span>
                            {location.state.emailresend ? <h1 className="passfindcomplete_letter">입력하신 이메일로 <br/>임시비밀번호 재발송을 완료했습니다.</h1> : <h1 className="passfind_letter">입력하신 이메일로 <br/>임시비밀번호를 발송했습니다.</h1>}
                        </div>

                        <div className="div_passfind">
                            <Link to = {{pathname:"/login"}}>
                                <button className="btn_passfindcomplete">로그인</button>
                            </Link>
                            <Link to = {{pathname:"/passfind"}}>
                                <button className="btn_passfindcomplete">이메일 재입력</button>
                            </Link>
                        </div>
                    </div>
            </div>
        );}else return null;
    }
}

export default PassFindComplete;