import React, { useState } from 'react'

export default function RadioButton() {

    const[catPerson, setCatPerson] = useState(false)
    const[dogPerson, setDogPerson] = useState(false)

    const handleCatChange = () => {
        setCatPerson(catPerson);
    }

    const handleDogChange = () => {
        setDogPerson(dogPerson);
    }

  return (
    <>
        <form action="#">
            <div>
                <RadioButton
                    label="Cat"
                    value={catPerson}
                    onChange={handleCatChange}
                />
                <RadioButton
                    label="Dog"
                    value={catPerson}
                    onChange={handleDogChange}
                />
            </div>
        </form>
    </>
  )
}
