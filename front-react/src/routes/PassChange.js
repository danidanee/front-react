import React from 'react';
import "./PassChange.css";
import { Link } from "react-router-dom";

class PassChange extends React.Component{

    

    render(){
        const {isemailVaild, ispassVaild} = this.state;
        return(
            <div className="PassChange" id="PassChange">
                이메일을 입력해주세요
            </div>
        );
    }
}

export default PassChange;