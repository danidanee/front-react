import React from 'react';
import "./PassChange.css";
import { Link } from "react-router-dom";
import Hi from '../img/Hi.jpg';
class PassChange extends React.Component{

    render(){
        return(
            <div className="PassChange" id="PassChange">
                <form className="PassChangeForm" id="PassChangeForm">
                    <div className="main-login">

                        <div>
                            <div id="div_passchange_letter"><img id="Hi_logo" alt="Hi" src={Hi}></img></div>
                            <h1 className="passchange_letter">이메일을 입력해주세요.</h1>
                        </div>
                        
                        <div className="div_passchange">
                            <label className="passchange_label" htmlFor="input_email">이메일</label>
                            <input className="input_passchange" id="input_passchange" placeholder="이메일을 입력하세요." type="text"
                            onChange={e => this.vaildateEmail(e.target.value)}></input>
                            <Link to = {{pathname:"/signup"}}>
                                <button className="btn_passchange">→</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default PassChange;