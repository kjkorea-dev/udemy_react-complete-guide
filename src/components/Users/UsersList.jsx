import PropTypes from 'prop-types'

import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.name}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  )
}

UsersList.propTypes = {
  users: PropTypes.array,
}

export default UsersList
