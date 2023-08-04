import React from "react";

class CounterClass extends React.Component{
    constructor(){
        super(); //call superclass
        this.increment = this.increment.bind(this) //bind the increment function to the class
        this.state = {
            number: 0
        }
    }

    increment(){
        this.setState({
            number: this.state.number + 1
        })
    }

    render(){
        return(
            <div>
                <h3>Class base component</h3>
                <h1>Counter = {this.state.number} </h1>
                <button onClick={this.increment} >Increment</button>
                {/* when click the increment button, call increment function*/}
                <hr></hr>
            </div>
        )
    }
}

export default CounterClass;