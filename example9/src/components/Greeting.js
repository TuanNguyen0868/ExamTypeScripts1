import React from 'react'

export default function Greeting(props) {
   const IsLogin = props.IsLogin
   if(IsLogin){
        return <UserGreeting/>
   }
   return<GuestGreeting/> 
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
