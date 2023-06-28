import PropTypes from 'prop-types'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import classes from './Home.module.css'

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={props.onLogout}>Logout</Button>
    </Card>
  )
}

Home.propTypes = {
  onLogout: PropTypes.func,
}

export default Home
