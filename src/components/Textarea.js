import React, {useState} from 'react'

export default function Textarea() {

    const [textarea, setTextarea] = useState("the content of the textarea goes in the value attribute");

    const handleChange = (event) => {
        setTextarea(event.target.value);
    }

  return (
    <>
        <form action="#">
            <textarea 
                name="text" 
                id="" 
                cols="30" 
                rows="10"
                value={textarea}
                onChange={handleChange}
            ></textarea>
        </form>
    </>
  )
}
