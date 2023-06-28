import PropTypes from 'prop-types'

import Navigation from './Navigation'
import classes from './MainHeader.module.css'

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={props.onLogout} />
    </header>
  )
}

MainHeader.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLogout: PropTypes.func,
}

export default MainHeader
