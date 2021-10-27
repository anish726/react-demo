import React, { useState } from 'react'

const MailBox = () => {
    const [unredMessage,setunReadMessage] = useState(['hello','by','ciao','ola','hola'])
   
      const [massage,setMassage] = useState('')
     const messageHandler = (e) =>{
         e.preventDefault();
        setunReadMessage([...unredMessage,massage]);
        setMassage('')
     }


    return (
        <div>
            <div>
                <form onSubmit={messageHandler}>
                    <input type='text'
                    placeholder="enter massage"
                    name='massage'
                    value={massage}
                    onChange={(e)=>setMassage(e.target.value)}
                    />
                    <button>Add</button>
                    
                </form>
                {unredMessage.map(data =>{
                    return(
                        <li>{unredMessage}</li>
                    )
                })}
            </div>
            <h1>This is your unread Message</h1>
            {unredMessage.length > 0 &&
            <h3>you have{unredMessage.length} unredMessage</h3>}
              
        </div>
    )
}

export default MailBox
