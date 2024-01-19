
import './subsModal.css'




const SubsModal = () => {
  return (
    <div className="modal__container">
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-xl modal-md modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add Individual Subscriber</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3 subsModal">
                  <div className="input-container">
                    <label for="recipient-name" className="col-form-label">ID (Ghana Card Preferred)</label>
                    <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                      <option selected className='options'>Select Title</option>
                      <option value="ghCard">Ghana Card</option>
                      <option value="passport">Passport</option>
                      <option value="driversLicense">Drivers License</option>
                    </select>
                    <input type="text" className="form-control" id="recipient-name" placeholder='ID  Card  Number' style={{ marginTop: '1rem' }} />
                  </div>
                  <div className="">
                    <div className="input-container">
                      <label for="recipient-name" className="col-form-label">Client Picture</label>
                      <input type="file" className="form-control" id="clientPicture" />
                    </div>
                  </div>
                </div>
                <div className="modal-inputContainer2">
                  <div className="input-container2">
                    <input type="text" className="form-control" id="mid" placeholder='MID Auto Generated' required />
                    <input type="text" className="form-control" id="first-name" placeholder='First Name' />
                    <input type="text" className="form-control" id="other-name" placeholder='Other Name' />
                    <input type="text" className="form-control" id="last-name" placeholder='Last Name' />
                  </div>
                  <div className="input-container3">
                    <input type="date" className="form-control" id="dob" placeholder='' required />
                    <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                      <option selected className='options'>Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>

                    </select>
                    <input type="text" className="form-control" id="occupation" placeholder='Occupation' />
                    <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                      <option selected className='options'>Marital Status</option>
                      <option value="married">Married</option>
                      <option value="single">Single</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </div>
                  <div className="input-container3">
                    <input type="text" className="form-control" id="address" placeholder='Address' />
                    <input type="number" className="form-control" id="contact" placeholder='Contact Number' />
                    <input type="text" className="form-control" id="landmark" placeholder='Land Mark' />
                    <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                      <option selected className='options'>-- Facility --</option>
                      <option value="agbogloshie">Agbogbloshie</option>
                      <option value="bibiani">Bibiani</option>
                      <option value="kasoa">Kasoa</option>
                      <option value="newTown">New Town</option>
                    </select>
                  </div>
                  <div className="input-container3">
                    <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                      <option selected className='options'>--Staff --</option>
                      <option value="agbogloshie">Adabo Akwasi</option>
                      <option value="bibiani">William Biden Yaw</option>
                      <option value="kasoa">Natasha Baidu</option>
                      <option value="newTown">Ama Ghana</option>
                    </select>
                    <input type="text" className="form-control" id="emg-person" placeholder='EMG Person' />
                    <input type="phone" className="form-control" id="contact" placeholder='EMG Phone' required />
                    <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                      <option selected className='options'>--Package --</option>
                      <option value="package">FastCare Premium </option>

                    </select>
                  </div>
                  <div className="input-container3">
                    <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                      <option selected className='options'>--Has NHIS ?--</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>

                    </select>
                    <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                      <option selected className='options'>--Debit Consent? --</option>
                      <option value="yes">Yes </option>

                    </select>
                    <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                      <option selected className='options'>-- Frequency --</option>
                      <option value="daily">Daily </option>
                      <option value="weekly">Weekly </option>
                      <option value="monthly">Monthly </option>

                    </select>
                    <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                      <option selected className='options'>--Payment Mode --</option>
                      <option value="cash">Yes </option>
                      <option value="momo">Momo </option>

                    </select>
                  </div>
                  <div className="input-container3">
                    <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                      <option selected className='options'>--Momo Network--</option>
                      <option value="mtn">MTN</option>
                      <option value="vodafone">VODAFONE</option>
                      <option value="airteltigo">AIRTELTIGO</option>

                    </select>
                    <input type="phone" className="form-control" id="contact" placeholder='Momo Number' required />
                    <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                      <option className='options'>-- Discount --</option>
                      <option selected value="daily">0% </option>
                      <option value="5%">5%  </option>
                      <option value="10%">10%  </option>
                      <option value="10%">15%  </option>
                      <option value="20%">20%  </option>
                      <option value="25%">25%  </option>


                    </select>
                    <select className="form-select form-select-xl form-select-md  form-select-sm " aria-label="Default select example">
                      <option className='options'>--Ass/Group--</option>
                      <option selected value="n/a">N/A </option>
                      <option value="momo">Pineapple Sellers </option>
                      <option value="potters">Potters </option>
                      <option value="momo">Hairdressers Association </option>
                    </select>

                  </div>
                  <div className="input-container3">
                    <input type="number" className="form-control" id="contact" placeholder='Amount Ghc' required />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">Save And Pay</button>
              <button type="button" className="btn btn-warning">Cancel</button>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default SubsModal
