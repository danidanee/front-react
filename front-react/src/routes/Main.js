import React from 'react';
import "./Main.css";

class Main extends React.Component{
    state = {};

    render(){
        return(
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
        );
    }
}

export default Main;