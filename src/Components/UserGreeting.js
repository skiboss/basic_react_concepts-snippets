import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

  render() {
    return (
        this.state.isLoggedIn ? (
        <div>Hello Meru</div> ) : (
        <div>Hello Guest</div>)
    )
    //return this.state.isLoggedIn && <div>Hello Meru</div> //short circuit method
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Hello Meru</div>
    // } else {
    //     message = <div>Hello Guest</div>
    // }

    // return <div>{ message }</div>
    // if (this.state.isLoggedIn) {
    //     return <div>Hello Meru</div>
    // } else {
    //     return <div>Hello Guest</div>
    // }
    // return (
    //     <div>
    //         <div>Hello Meru</div>
    //     </div>
    // )
  }
}

export default UserGreeting