import PropTypes from 'prop-types'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log('Clicked!')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

ExpenseItem.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
}

export default ExpenseItem