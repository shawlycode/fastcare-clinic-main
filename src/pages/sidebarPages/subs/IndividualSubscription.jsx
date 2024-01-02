import React from 'react'
import './indsubs.css'
import logo from '../../../assets/fcclogo.png'
import { CiEdit } from "react-icons/ci";



const IndividualSubscription = () => {
  return (
    <div className='indSubs'>
      <div className="indSubs__container">
        <div className="insubs__content">
          <div className="header_container">
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="header-text">
              <p>
                The Individual Subscription is maintained by the company or organization of the person registering for the subscription, however only the registering individual is considered an “Individual Subscriber.” Benefits of an Individual Subscription may not be shared among others in the Individual Subscriber’s company or organization
              </p>
            </div>
          </div>
          <div className="header_input">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" />
              <label for="floatingInput">Search with Name or Membership ID</label>
            </div>
            <button className='addSubs__btn'> + Subscriber</button>
          </div>
          <div className="table__data indSubs-table">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">FullName</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Date of Birth</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Male</td>
                  <td>12/03/1980</td>
                  <td>+233 0200000003</td>
                  <td><CiEdit color="black " size={'22px'} cursor={'pointer'} /></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Male</td>
                  <td>28/08/1999</td>
                  <td>+233 0200000003</td>
                  <td><CiEdit color="black " size={'22px'} cursor={'pointer'} /></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry Silvia</td>
                  <td>Female</td>
                  <td>05/08/1989</td>
                  <td>+233 0200000003</td>
                  <td><CiEdit color="black " size={'22px'} cursor={'pointer'} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndividualSubscription
