import React, {useState} from 'react'

export default function SubmittingForms() {

    const [name, setName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered is: ${name}`)
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name:</label>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input type="submit" value="submit" />
        </form>
    </>
  )
}
