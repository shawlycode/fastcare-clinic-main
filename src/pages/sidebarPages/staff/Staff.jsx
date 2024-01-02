import { useState } from "react";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";
import './staff.css'
import StaffModal from "../../../components/modal/StaffModal";
import { CiEdit } from "react-icons/ci";




const Staff = () => {


  return (

    <div className='staff'>

      <div className="staff__container">
        <div className="header">
          <div className="icon">
            <PiUsersThreeDuotone className="header__icon" />
          </div>
          <div className="header__text">
            <p>Making sure you have captured all the right information when starting a new staff member can save a lot of headaches later on and it’s easy to miss those details during the hectic first days and weeks when a new staff member begins.</p>
          </div>
        </div>
        <div className="form">
          <input type="text" class="form-control" aria-label="input" placeholder="Search" />
          <StaffModal />
        </div>
        <div className="new__staff-container">
          <div className="table__data">
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

export default Staff;
