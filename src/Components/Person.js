import React from 'react'
// import NameList from './NameList'

function Person({person}) {
  return (
    <h2>
        I am {person.name}. I am {person.age} 
        years old. I know {person.skill}
    </h2>
  )
}

export default Person