import PropTypes from 'prop-types'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../assets/meals.jpg'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious foods!" />
      </div>
    </>
  )
}

Header.propTypes = {
  onShowCart: PropTypes.func,
}

export default Header
