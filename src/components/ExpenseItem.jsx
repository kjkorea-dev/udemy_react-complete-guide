import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2023, 5, 25)
  const expenseTitle = 'Car Insurance'
  const expenseAmount = 239.22

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
