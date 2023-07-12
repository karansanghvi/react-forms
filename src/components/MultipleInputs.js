import React, {useState} from 'react'

export default function MultipleInputs() {

    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(inputs);
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="#">Enter your name: </label>
            <input 
                type="text" 
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
            />
            <label for="#">Enter your age: </label>
            <input 
                type="number"
                name="age"
                value={inputs.age || ""}
                onChange={handleChange}
            />
            <input type="submit" value="submit" />
        </form>
    </>
  )
}
