import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Main extends Component{


    render() {

        return (
            <div className="ya-main">
                {this.props.content}
            </div>
        )
    }

}

export default Main;