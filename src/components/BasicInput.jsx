const BasicForm = () => {
  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input type="text" id="email" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
