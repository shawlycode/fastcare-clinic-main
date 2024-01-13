import React from 'react'
import './indsubs.css'
import logo from '../../../assets/fcclogo.png'
import { CiEdit } from "react-icons/ci";
import SubsModal from '../../../components/modal/subsModal/SubsModal';
import { IoMdAdd } from "react-icons/io";

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
          <div className="form">
            <input type="text" className="form-control" aria-label="input" placeholder="Search  with name or membership ID" />
            <div className="btn__inds">
              < SubsModal />
              <button type="button" className="btn addNew__btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><span><IoMdAdd /></span>Add New Staff</button>

            </div>
          </div>
          <div className="table__data indSubs-table">
            <div className="table-responsive-sm-md-lg">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">MID</th>
                    <th scope="col">FullName</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Facility</th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Male</td>
                    <td>12/03/1980</td>
                    <td> 0200000003</td>
                    <td><CiEdit color="black " size={'22px'} cursor={'pointer'} /></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Male</td>
                    <td>28/08/1999</td>
                    <td> 0200000003</td>
                    <td><CiEdit color="black " size={'22px'} cursor={'pointer'} /></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry Silvia</td>
                    <td>Female</td>
                    <td>05/08/1989</td>
                    <td>0200000003</td>
                    <td><CiEdit color="black " size={'22px'} cursor={'pointer'} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndividualSubscription
