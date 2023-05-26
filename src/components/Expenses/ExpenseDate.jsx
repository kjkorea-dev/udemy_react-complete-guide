import PropTypes from 'prop-types'
import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const day = props.date.toLocaleString('en-US', { day: '2-digit' })
  const year = props.date.getFullYear()
  console.log(typeof year)
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  )
}

ExpenseDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
}

export default ExpenseDate
