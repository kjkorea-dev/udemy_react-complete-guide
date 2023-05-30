import PropTypes from 'prop-types'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

Expenses.propTypes = {
  items: PropTypes.array,
}

export default Expenses
