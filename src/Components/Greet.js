import React from 'react'

const Greet = ({name, heroname}) => {
    // const {name, heroname} = props //destructuring props
    return <h1>Hello, {name} a.k.a {heroname} </h1>
}

export default Greet