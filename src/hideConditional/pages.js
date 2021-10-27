import React, { useState } from 'react'
import Warnning from './warnning';

const Pages = () => {
    const [showWarning, setShowWarning] = useState(true);
        
   const  hideHandler = () =>{
    setShowWarning(!showWarning)
   }

    return (
        <div>
            <Warnning warning={showWarning}/>
            <button onClick={hideHandler}>
                {showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
    )
}

export default Pages
