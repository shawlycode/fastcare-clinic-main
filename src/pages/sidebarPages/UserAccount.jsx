
import { CiEdit } from "react-icons/ci";
const UserAccount = () => {
  return (
    <>
      <div className='userAccount'>
        <div className="userAccount__container">
          <div className="header">
            <div className="icon">

            </div>
            <div className="header__text">
              <p>Setup User Accounts</p>
              <p>
                A user account is an established technique for connecting a user and an information service and/or computer network. User accounts determine whether or not a user can connect to a computer, network or similar networks.</p>
            </div>
          </div>
          <div className="content">
            <div>
              <label for="recipient-name" className="col-form-label">Full Name</label>
              <div class="input-group mb-3 drop__down">
                <select class="form-select" id="title" aria-label="Example select with button addon">
                  <option selected>--Select Staff--</option>
                  <option value="1">Mark Morrison</option>
                  <option value="2">Johnson Smith</option>
                  <option value="3">Larry Silvia</option>
                </select>
              </div>
            </div>
            <label for="recipient-name" className="col-form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="someone@fastcare.com" />
            <div>
              <label for="recipient-name" className="col-form-label">Select User Role</label>
              <div class="input-group mb-3 drop__down">
                <select class="form-select" id="title" aria-label="Example select with button addon">
                  <option selected className='menu'>--User Role--</option>
                  <option value="1">Admin</option>
                  <option value="2">Sales Executive</option>
                  <option value="3">Supervisor</option>
                  <option value="3">Front Desk</option>
                  <option value="3">Customer Care</option>
                  <option value="3">Management</option>
                </select>
              </div>
            </div>
            <div>
              <label for="recipient-name" className="col-form-label"> Facility</label>
              <div class="input-group mb-3 drop__down">
                <select class="form-select" id="title" aria-label="Example select with button addon">
                  <option selected>--Select Facility--</option>
                  <option value="1">Agbogbloshie</option>
                  <option value="2">Ashiaman</option>
                  <option value="3">Bibiani</option>
                  <option value="3">New Town</option>
                  <option value="3">Kasoa</option>
                </select>
              </div>
            </div>
            <div class="d-grid gap-2">
              <button class="submit__btn" type="button">Submit</button>

            </div>
          </div>
          <div className="table__data-container">
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
    </>


  )
}

export default UserAccount
