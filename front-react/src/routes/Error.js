import React from 'react';
import "./Error.css";
import { Link } from "react-router-dom";

class Error extends React.Component{

    render(){
        return(
            <div className="Error" id="NotFound">
                <img className="NotFound_img" alt="logo"src="https://dnvefa72aowie.cloudfront.net/origin/etc/201708/b1ae556883f38d116dd2d5ced0af232ebd3f35e3b2535fef1080a975f8c4a477.png"></img>
                <h1 className="NotFound_h1_404">404</h1>
                <h2 className="NotFound_h2">That's an error.</h2>
                <hr></hr>
                <h2 className="NotFound_h2_page">페이지를 표시할 수 없습니다.</h2>
                <h5 className="NotFound_h5">요청하신 파일을 찾을 수 없거나, 서버에서 제거 되었습니다.</h5>
                <h5 className="NotFound_h5">URL을 확인해 주시기 바랍니다.</h5>
            
                <Link to = {{pathname:"/"}}>
                    <h5 className="NotFound_h5_404">홈으로 이동</h5>
                </Link>
            </div>
        );
    }
}

export default Error;