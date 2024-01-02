import { useState } from "react";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";
import './pages.css'
import StaffModal from "../../components/modal/StaffModal";





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
            <p>#</p>
            <p>Full Name</p>
            <p>Gender</p>
            <p>Date of Birth</p>
            <p>Phone</p>
            <p>Edit</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Staff;
