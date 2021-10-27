import React from 'react'

const warnning = (props) => {
    if(!props.warning){
        return null
    }
    return (
        <div className="warning">
            warning!
            
        </div>
    )
}

export default warnning
