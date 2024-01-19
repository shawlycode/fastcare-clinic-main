
import './reports.css'
export const FacilitySetup = () => {
  return (
    <div className="reports">
      Facility Setup
    </div>
  )
}
export const FacilityPerformance = () => {
  return (
    <div className="reports reports__container">
      <div className="facility__header">
        <div className="facility__input">
          <label>Start Date</label>
          <input type="date" className='reports__date-input' />
        </div>
        <div className="facility__input">
          <label>Start Date</label>
          <input type="date" className='reports__date-input' />
        </div>
      </div>
      <div className="facility__charts">
        <div className="facility__barChart">Graph</div>
        <div className="facility__pieChart">Pie</div>
      </div>
      <div className="facility__reports">
        <div className="table__data indSubs-table auto__table ">
          <div className="table-responsive-sm-md-lg">
            <table className="table reports-table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Facility</th>
                  <th scope="col">Amount(Ghs)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Agbobloshie</td>
                  <td>GHS 5.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export const StaffCollectionPerformance = () => {
  return (
    <div className="reports">
      <div className="staff__performance-container">
        <div className="select__content">
          <label>Start Date</label>
          <input
            type="date"
            className="form-control group__input"
            id="startDate"

          />
        </div>
        <div className="select__content">
          <label>End Date</label>
          <input
            type="date"
            className="form-control group__input"
            id="endDate"

          />
        </div>
      </div>
    </div>
  )
}
export const AgentsCommissionList = () => {
  return (
    <div className="reports">
      <div className="agents__container">
        <div className="agents__header">
          <h3>AGENTS COMMISSION LIST</h3>
          <p>Agents and Sales Executives Commissions earned for the selected Month and Year</p>
        </div>
        <div className="agents__year">
          <div className="select__content">
            <label>Year</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>--Select Year--</option>
              <option value="1">2022 </option>
              <option value="2">2023</option>
              <option value="3">2024</option>
            </select>
          </div>
          <div className="select__content">
            <label>Month</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>--Select Month--</option>
              <option value="1">January </option>
              <option value="3">February</option>
              <option value="3">March</option>
              <option value="3">April</option>
              <option value="3">May</option>
              <option value="3">June</option>
              <option value="3">July</option>
              <option value="3">August</option>
              <option value="3">September</option>
              <option value="3">October</option>
              <option value="3">November</option>
              <option value="3">December</option>
            </select>
          </div>
        </div>
        <div className="agents__btn">
          <div className="agent-btn1">Show List Report</div>
          <div className="agent-btn2">Show Summary Report</div>
        </div>
      </div>
    </div>
  )
}
export const SubscribersView = () => {
  return (
    <div className="reports">
      <div className="subscribers__container">
        <div className="select__content">
          <label>Status</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>--Select--</option>
            <option value="1">Good Standing</option>
            <option value="2">Defaulters</option>
            <option value="3">In-active</option>
          </select>
        </div>
        <div className="select__content">
          <label>Facility</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>--Select--</option>
            <option value="1">Agbogloshie</option>
            <option value="2">Kasoa</option>
            <option value="3">New Town</option>
          </select>
        </div>
        <div className="select__content">
          <label>Staff</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>--Select--</option>
            <option value="1">Good Standing</option>
            <option value="2">Defaulters</option>
            <option value="3">In-active</option>
          </select>
        </div>
        <div className="select__content">
          <label>Subscribers Search</label>
          <input
            type="text"
            className="form-control group__input"
            id="groupSearch"
            placeholder="Search"
          />
        </div>
      </div>
    </div >
  )
}

