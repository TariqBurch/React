import React, { Component } from 'react';
class Screen extends Component {


    render() {           
        console.log("Screen-Rendered")
        return ( 
            <div >
               
               <input id="screen1" type="text" className="calculator-screen z-depth-1" value={this.props.valueFromInputCal} disabled />
               
            </div>
        );
        }            
}

export default Screen