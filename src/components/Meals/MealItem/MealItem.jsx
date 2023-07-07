import PropTypes from 'prop-types'
import classes from './MealItem.module.css'

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div>{price}</div>
      </div>
      <div></div>
    </li>
  )
}

MealItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
}

export default MealItem
