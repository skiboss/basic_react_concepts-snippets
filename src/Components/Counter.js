import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0 //initialize state to 0
        }
    }

    Increment() {
        this.setState((prevState) => ({ //use function instead of object
            count: prevState.count + 1
        }), console.log(this.state.count + 5)

            // {count: this.state.count + 1}, 
            // ()=> console.log(this.state.count)
        )
    }

    IncrementFive() {

        //Function to increment count by 5
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }


  render() {
    return (
        //Display the UI as count - 0 and declare a button to increment the count on the click.
        <div>
            <h1>Count - {this.state.count} </h1>
            <button onClick = {() => {this.IncrementFive()}} >Increment</button>
        </div>
      
    )
  }
}

export default Counter