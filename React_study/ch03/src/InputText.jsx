import { useState } from 'react'

function InputText() {
   const [text, setText] = useState('')

   return (
      <div>
         <input
            type="text"
            value={text}
            onChange={(e) => {
               setText(e.target.value)
            }}
         />
         <p>입력한 값: {text}</p>
      </div>
   )
}

export default InputText
