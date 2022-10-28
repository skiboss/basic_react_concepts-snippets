import React from 'react'

function handle() {
    console.log("You clicked me!") //string to be returned on click of button
}

function funClick() {
  return (
    <div>
        <button onClick={handle}>Function Click me</button> {/*Event listener in react functions*/}
    </div>
  )
}

export default funClick