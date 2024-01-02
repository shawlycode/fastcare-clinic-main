import { IoMdAdd } from "react-icons/io";
import './modal.css'




const StaffModal = () => {
  return (
    <div className="modal__container">
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><span><IoMdAdd /></span>Add New Staff</button>


      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">New Staff Setup</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <div className="input__container">
                    <div className="input">
                      <div className="input1">
                        {/* <label for="recipient-name" className="col-form-label">Staff Code:</label> */}
                        <input type="text" className="form-control" id="recipient-name" placeholder="Auto Staff Code" />
                      </div>
                      <div class="input-group mb-3 drop__down">

                        <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                          <option selected>Select Title</option>
                          <option value="1">Mr</option>
                          <option value="2">Mrs</option>
                          <option value="3">Miss</option>
                          <option value="3">Dr</option>
                          <option value="3">Prof</option>
                          <option value="3">Hon</option>
                        </select>
                      </div>
                    </div>
                    <div className="input">
                      <div className="input__names">
                        <input type="text" className="form-control" id="recipient-name" placeholder="First Name" />
                        <input type="text" className="form-control" id="recipient-name" placeholder="Last Name" />
                        <input type="text" className="form-control" id="recipient-name" placeholder="Other Names" />
                      </div>
                    </div>
                    <div className="input">
                      <div className="input__names">
                        <input type="number" className="form-control" id="recipient-name" placeholder="Phone Number" />
                        <input type="text" className="form-control" id="recipient-name" placeholder="Position" />
                        {/* <input type="text" className="form-control" id="recipient-name" placeholder="Other Names" /> */}
                      </div>
                    </div>
                    <div className="input">
                      <div class="input-group mb-3 drop__down">
                        <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                          <option selected> Gender</option>
                          <option value="1">Male</option>
                          <option value="2">Female</option>
                          <option value="3">Other</option>
                        </select>
                      </div>
                      <div className="input__names">
                        <input type="text" className="form-control" id="recipient-name" placeholder="Nationality" />
                        <input type="text" className="form-control" id="recipient-name" placeholder="National ID Number" />
                      </div>
                    </div>
                    <div className="input">
                      <div class="input-group mb-3 drop__down">
                        <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                          <option selected> Marital Status</option>
                          <option value="1">Male</option>
                          <option value="2">Female</option>
                          <option value="3">Other</option>
                        </select>
                      </div>
                      <div class="input-group mb-3 drop__down">
                        <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                          <option selected> Date of Birth</option>
                          <option value="1">Male</option>
                          <option value="2">Female</option>
                          <option value="3">Other</option>
                        </select>
                      </div>

                    </div>

                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffModal
