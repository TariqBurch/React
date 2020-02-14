import React, {Component} from 'react';
import Screen from './screen';
import InputButton from './inputButton';
import * as math from 'mathjs';

class InputCal extends Component{
    
    //INTIALISATION
    constructor(props){
        super(props);
        this.state = {

            equation: ""   
        }
    }

    //USER DEFINED FUNCTIONS
    handleInput = (childValue) => {

        this.setState({equation: this.state.equation + childValue});
        
    }

    handleEqual = () => {
        this.setState({ equation: math.evaluate(this.state.equation) });
    }

    handleClear = () => {
        this.setState({ equation: ""});
    }



    

    render(){
        console.log("Calculator-Rendered")

       
        return(
            <div  className="calculator card">
                    
                
                 <Screen valueFromInputCal={this.state.equation} />
                <InputButton  
                    handleInput={this.handleInput.bind(this)} 
                    handleEqual={this.handleEqual.bind(this)}
                    handleClear={this.handleClear.bind(this)}  />
               
            </div>
        );
    }

}

export default InputCal