import React, { Component } from 'react'

class classClick extends Component {
    handle() {
        console.log("you clicked me oh!")
    }

    
  render() {
    return (
        <div>
            <button onClick={this.handle}>React class click</button>
        </div>
    )
  }
}

export default classClick