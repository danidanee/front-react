import React from 'react';
import "./Error.css";
import { Link } from "react-router-dom";
import Errorimg from '../img/error.PNG';

class Error extends React.Component{
    
    goback(){
        this.props.history.goBack();
    }

    render(){
        return(
            <div className="Error" id="Error">
                <img className="Error_img" alt="logo"src={Errorimg}></img>
                <h1 className="Error_h1_404">Sorry</h1>
                <hr></hr>
                <h2 className="Error_h2_page">페이지 오류 안내</h2>
                <h5 className="Error_h5">홈페이지 이용에 불편을 드려 죄송합니다.</h5>
                <h5 className="Error_h5">관리자에게 오류를 통보하였으니, 잠시 후에 다시 이용해주세요.</h5>
            
                <Link to = {{pathname:"/"}}>
                    <h5 className="Error_h5_404">홈으로 이동</h5>
                </Link>

                <h5 className="Error_h5_back" onClick={this.goback.bind(this)}>뒤로가기</h5>
            </div>
        );
    }
}

export default Error;