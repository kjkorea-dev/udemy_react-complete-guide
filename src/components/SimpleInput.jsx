import { useRef, useState } from 'react'

const SimpleInput = () => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    console.log(enteredName)

    const enteredVvalue = nameInputRef.current.value
    console.log(enteredVvalue)

    // nameInputRef.current.value = ''  Not ideal, don't manipulate DOM
    setEnteredName('')
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onChange={nameInputHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
