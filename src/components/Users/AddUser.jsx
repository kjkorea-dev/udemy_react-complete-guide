import PropTypes from 'prop-types'
import { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
  const [enteredUsernmae, setEnteredUsernmae] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const addUserHandler = (event) => {
    event.preventDefault()

    if (enteredUsernmae.trim().length === 0 || enteredAge.trim().length === 0) {
      return
    }

    if (+enteredAge < 1) {
      return
    }

    props.onAddUser(enteredUsernmae, enteredAge)
    setEnteredUsernmae('')
    setEnteredAge('')
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsernmae(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  return (
    <div>
      <ErrorModal title="An error occured" message="Something went wrong!" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsernmae}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

AddUser.propTypes = {
  onAddUser: PropTypes.func,
}

export default AddUser
