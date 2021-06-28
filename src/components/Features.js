import React, { Component } from 'react'
import './Feature.css';
import features from "./features.png";
export class Features extends Component {
    render() {
        return (
            <div className="feature_container">
          <h3 className="fea"><u>Featu<span className="r">res</span></u></h3>
          <h5 className="click">Compress in just 3 clicks</h5>
          <br/>
          <img className="feature"  src={features}  width="35%" alt ="LOGO"/>
        
          
           </div>
        )
    }
}

export default Features

