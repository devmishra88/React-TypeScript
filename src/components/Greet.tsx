import React from 'react'

type GreetProps = {
  name:string
}

export const Greet=(props:GreetProps)=> {
  return (
    <div><h2>welcome {props.name}! You have 10 new messages</h2></div>
  )
}
