import React, {useState} from 'react'

export default function HandlingForms() {

    const [name, setName] = useState('')

  return (
    <>
        <form action="#">
            <label htmlFor="#">Enter your name:</label>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
        </form>
    </>
  )
}
