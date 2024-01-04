import { BsCashCoin } from "react-icons/bs";
import './payments.css';
const ViewPayments = () => {
  return (
    <div className="viewPayment">
      <div className="view-container">
        <div className="view__header">
          <BsCashCoin size={'54px'} color="black" />
          <p>You can create a report of all payments received over a date range. This will show all payments entered against a subscription record regardless of whether it was a renewal payment or a initial subscription payment recorded.</p>
        </div>
        <div className="input__container">
          <div className="input__content">
            <label>Start Date</label>
            <input type="date" />
          </div>
          <div className="input__content">
            <label>End Date</label>
            <input type="date" />
          </div>
          <div className="input__content">
            <label>Search</label>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="paymentsDashboard">
          <button className="reports__btn">
            Show as report
          </button>
          <div className="paymentStatus">
            <h2>Total Payments: GHS 0. 00</h2>
          </div>
          <div className="table-responsive-sm-md-lg">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">MID</th>
                  <th scope="col">Subscriber</th>
                  <th scope="col">Mode</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount(GHS)</th>
                  <th scope="col">Status</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>22/01/2024</td>
                  <td>FCX08</td>
                  <td>Family</td>
                  <td> Momo</td>
                  <td> Full Package</td>
                  <td> 1,500</td>
                  <td className="active"> Active</td>

                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewPayments
