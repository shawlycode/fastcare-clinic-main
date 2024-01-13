
import './modal.css'



const StaffModal = () => {
  return (
    <div className="modal__container">
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg  modal-md modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Staff Setup</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <div className="input-container">
                    {/* <label for="recipient-name" className="col-form-label">Recipient:</label> */}
                    <input type="text" className="form-control" id="recipient-name" placeholder='Auto Staff Code' />
                  </div>
                  <div className="input-container">
                    {/* <label for="recipient-name" className="col-form-label">Title</label> */}
                    <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                      <option selected className='options'>Select Title</option>
                      <option value="mrs">Two</option>
                      <option value="miss">Miss</option>
                      <option value="dr">Dr.</option>
                      <option value="prof">Prof</option>
                      <option value="hon">Hon</option>
                    </select>
                  </div>
                  <div className="input-container">
                    {/* <label for="recipient-name" className="col-form-label">Recipient:</label> */}
                    <input type="text" className="form-control" id="first-name" placeholder='First Name' />
                  </div>
                  <div className="input-container">
                    {/* <label for="recipient-name" className="col-form-label">Recipient:</label> */}
                    <input type="text" className="form-control" id="last-name" placeholder='Last Name' />
                  </div>
                  <div className="input-container">
                    {/* <label for="recipient-name" className="col-form-label">Recipient:</label> */}
                    <input type="text" className="form-control" id="other-name" placeholder='Other Name' />

                  </div>
                  <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                    <option selected className='options'>Select Gender</option>
                    <option value="mrs">Male</option>
                    <option value="miss">Female</option>

                  </select>
                  <div className="input-container">
                    {/* <label for="recipient-name" className="col-form-label">Recipient:</label> */}
                    <input type="text" className="form-control" id="contact" placeholder='Contact Number' />

                  </div>
                  <div className="input-container">
                    {/* <label for="recipient-name" className="col-form-label">Recipient:</label> */}
                    <input type="text" className="form-control" id="nationality" placeholder='Nationality' />

                  </div>
                  <div className="input-container">
                    {/* <label for="recipient-name" className="col-form-label">Recipient:</label> */}
                    <input type="text" className="form-control" id="position" placeholder='Position' />

                  </div>
                  <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                    <option selected className='options'>Marital Status</option>
                    <option value="married">Married</option>
                    <option value="single">Single</option>

                  </select>
                  <div className="input-container">
                    {/* <label for="recipient-name" className="col-form-label">Recipient:</label> */}
                    <input type="text" className="form-control" id="nationalId" placeholder='National ID' />

                  </div>
                  <div className="input-container">
                    {/* <label for="recipient-name" className="col-form-label">Recipient:</label> */}
                    <input type="date" className="form-control" id="date of birth" placeholder='Date of Birth' />

                  </div>
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">Save</button>
              <button type="button" className="btn btn-warning">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default StaffModal
