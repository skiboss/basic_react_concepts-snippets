import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome visitor' //Initialize state
        }
    }

    changeState() {
        this.setState({
            message: 'Thank you for Subscribing' //Set new state when changeState is called
        })
    }

  render() {
    return (
        //Display default message first then change the message on the click of the subscribe button
    <div>
        <h1> {this.state.message} </h1>
        <button onClick = { () => this.changeState() } >Subscribe</button>
    </div>
    )
  }
}

export default Message