import React, { Component } from 'react';
class inputButton extends Component {

    //USER DEFINED FUNCTIONS
    handleClick(e){
        //captures all the digits & operators including the dot.
        let value= e.target.value
        this.props.handleInput(value);
        console.log(value); 
    }

    onEqual(e){
        this.props.handleEqual(e.target.value);
        console.log("=");

    }

    onClear(e){
        this.props.handleClear(e.target.value);
        console.log("clear");
    }



    render() {           
        console.log("Buttons-Rendered")
        return ( 
            <div className="calculator-keys">
               
                 
                <button type="button" className="operator btn btn-info" value="+" onClick={e => this.handleClick(e,"value")}>+</button>
                <button type="button" className="operator btn btn-info" value="-" onClick={e => this.handleClick(e,"value")}>-</button>
                <button type="button" className="operator btn btn-info" value="*" onClick={e => this.handleClick(e,"value")}>&times;</button>
                <button type="button" className="operator btn btn-info" value="/" onClick={e => this.handleClick(e,"value")}>&divide;</button>


                <button type="button" value="7" className="btn btn-light waves-effect" onClick={e => this.handleClick(e,"value")} >7</button>
                <button type="button" value="8" className="btn btn-light waves-effect" onClick={e => this.handleClick(e,"value")} >8</button>
                <button type="button" value="9" className="btn btn-light waves-effect" onClick={e => this.handleClick(e,"value")}>9</button>
                <button type="button" value="4" className="btn btn-light waves-effect" onClick={e => this.handleClick(e,"value")}>4</button>
                <button type="button" value="5" className="btn btn-light waves-effect" onClick={e => this.handleClick(e,"value")}>5</button>
                <button type="button" value="6" className="btn btn-light waves-effect" onClick={e => this.handleClick(e,"value")}>6</button>
                <button type="button" value="1" className="btn btn-light waves-effect" onClick={e => this.handleClick(e,"value")}>1</button>
                <button type="button" value="2" className="btn btn-light waves-effect" onClick={e => this.handleClick(e,"value")}>2</button>
                <button type="button" value="3" className="btn btn-light waves-effect" onClick={e => this.handleClick(e,"value")}>3</button>
                <button type="button" value="0" className="btn btn-light waves-effect" onClick={e => this.handleClick(e,"value")}>0</button>


                <button type="button" className="decimal function btn btn-secondary" onClick={e => this.handleClick(e,"value")} value=".">.</button>
                <button type="button" className="all-clear function btn btn-danger btn-sm" value="all-clear" onClick={e => this.onClear(e,"value")}>AC</button>

                <button type="button" className="equal-sign operator btn btn-default" value="=" onClick={e => this.onEqual(e,"value")}>=</button>
            
            </div>
        );
        }            
}

export default inputButton