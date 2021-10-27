import React, { useState } from 'react'
import GuestGreeting from './component/GuestGreeting';
import Input from './component/Input';
import UserGreeting from './component/UserGreeting';
import Pages from './hideConditional/pages';
import MailBox from './mailbox/MailBox';

const App = () => {
  const haeder = 'Hello World';
  const [name, setName] = useState(haeder);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   

  const changeHeader = () =>{
    const newHeader= 'i am ansh'
    setName(newHeader)
    console.log(name)
  }
  
 

  return (
    <div>
     
      <h3>{name}</h3>
     <button onClick={changeHeader}>Click Me</button>
     {isLoggedIn ? <UserGreeting/> : <GuestGreeting/>}

     <MailBox/>

     <Pages/>
     <Input/>
    </div>
  )
}

export default App
