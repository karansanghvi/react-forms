import React, { useState } from 'react'

export default function Dropdown() {

    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

  return (
    <>
        <form action="#">
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    </>
  )
}
