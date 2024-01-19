
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
          <input type="date" />
        </div>
        <div className="facility__input">
          <label>Start Date</label>
          <input type="date" />
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
      Staff Collection Performance
    </div>
  )
}
export const AgentsCommissionList = () => {
  return (
    <div className="reports">
      Agents Commission List
    </div>
  )
}

