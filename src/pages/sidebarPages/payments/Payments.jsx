import React from 'react';
import ViewPayment from './ViewPayment';
export const Payments = () => {
  return (
    <div className="Payments">
      <h1>Payments</h1>
    </div>
  );
};

export const ViewPayments = () => {
  return (
    <div className="Payments">
      <ViewPayment />
    </div>
  );
};

export const MakePayments = () => {
  return (
    <div className="Payments makePayments">
      <div className="input__container makepayMents-input">
        <div className="input__content">
          <label>Search</label>
          <input type="text" placeholder='Name or Membership ID' />
        </div>
        <p>
          Click on a name to make payment against that name. All payments should
          be done via MoMo. (Cash is strictly NOT allowed)
        </p>
      </div>
      <div className="table__data makePayments_table">
        {/* <div className="table-responsive-sm-md-lg"> */}
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
              <td> VIP</td>
              <td> 1,500</td>
              <td className="active"> Active</td>

            </tr>

          </tbody>
        </table>
        {/* </div> */}
      </div>
    </div>
  );
};

export const PaymentsConfirmation = () => {
  return (
    <div className="payments">
      <div className="viewPayment">
        <div className="view-container">
          <div className="view__header">
            <p>Confirm Payment Received By Sales Executives</p>
          </div>
          <div className="input__container select">
            <div className="input__content ">
              <label>Sales Executives</label>
              <select class="form-select form-select-sm" aria-label="Small select example">
                <option selected>Open this select menu</option>
                <option value="1">Micky Morrison</option>
                <option value="2">Kwasi Adabo</option>
                <option value="1">Micky Morrison</option>
                <option value="2">Kwasi Adabo</option>
                <option value="1">Micky Morrison</option>
                <option value="2">Kwasi Adabo</option>
                <option value="1">Micky Morrison</option>
                <option value="2">Kwasi Adabo</option>
                <option value="1">Micky Morrison</option>
                <option value="2">Kwasi Adabo</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="paymentsDashboard">
            <div className="paymentStatus">
              <h2>Total Payments: GHS 0. 00</h2>
            </div>
            <div className="table__data">
              {/* <div className="table-responsive-sm-md-lg"> */}
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">MID</th>
                    <th scope="col">Subscriber</th>
                    <th scope="col"> Payment Date</th>
                    <th scope="col">Mode</th>
                    <th scope="col">Amount (GHS)</th>
                    <th scope="col">Staff</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>22/01/2024</td>
                    <td>FCX08</td>
                    <td>Family</td>
                    <td> Momo</td>
                    <td> 1,500</td>
                    <td> Kasoa</td>
                    <td className="active"> Active</td>

                  </tr>

                </tbody>
              </table>
              {/* </div> */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
