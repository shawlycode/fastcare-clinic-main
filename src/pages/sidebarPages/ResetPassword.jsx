import React from 'react';

const ResetPassword = () => {
  return (
    <div className="userAccount">
      <div className="userAccount__container">
        <div className="header">
          <div className="icon"></div>
          <div className="header__text">
            <p> Change User Password</p>
            <p>
              A user account is an established technique for connecting a user
              and an information service and/or computer network. User accounts
              determine whether or not a user can connect to a computer, network
              or similar networks.
            </p>
          </div>
        </div>
        <div className="content">
          <div>
            <label for="recipient-name" className="col-form-label"> Full Name </label>
            <input type="text" className="form-control" id="fullName" placeholder="Mark Smith" />
          </div>
          <div>
            <label for="recipient-name" className="col-form-label"> Email </label>
            <input type="text" className="form-control" id="email" placeholder="Administrator" />
          </div>
          <div>
            <label for="recipient-name" className="col-form-label"> User Role </label>
            <input type="text" className="form-control" id="userRole" placeholder="Mark Smith" />
          </div>
          <div>
            <label for="recipient-name" className="col-form-label"> Facility </label>
            <input type="text" className="form-control" id="fullName" />
          </div>
          <div>
            <label for="recipient-name" className="col-form-label"> New Password </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div>
            <label for="recipient-name" className="col-form-label"> Confirm Password  </label>
            <input type="password" className="form-control" id="confirmPassword" />
          </div>
          <div class="d-grid gap-2">
            <button class="changePassword__btn" type="button">Change Password</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
