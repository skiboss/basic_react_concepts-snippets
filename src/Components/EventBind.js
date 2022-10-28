import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            message: 'Goodbye' //best method
        })
    }

    // handleClick = () => {
    //     this.setState({
    //         message: 'Yoooo'                 //method 4
    //     })
    // }


    render() {
        return (
        <div>
            <div> {this.state.message} </div>
            <div><button onClick={this.handleClick}>Click</button></div>
            <button onClick={() => this.handleClick()}>Bind Click</button>
            <button onClick={this.handleClick.bind(this)}>Binder Click</button>
        </div>
        )
    }
}

export default EventBind