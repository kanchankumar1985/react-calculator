import React from 'react'

export default function CalInput({text , id , handleClick}) {

  return (
    
        <button onClick={handleClick} >
            <span>{text}</span>
        </button>
  )
}
