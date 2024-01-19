import React from 'react'
import './setup.css'

export const FacilitySetupModal = () => {
  return (
    <div>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel"> Setup Facility</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="setUp__form">
                  <label className='setup__label'>Name of Facility</label>
                  <input type="text" className="form-control" id="facilityName" placeholder='Name' />
                </div>
                <div className="setUp__form">
                  <label className='setup__label'>	Phone Number</label>
                  <input type="text" className="form-control" id="facilityPhone" placeholder='0200000000' />
                </div>
                <div className="setUp__form">
                  <label className='setup__label'>	Location</label>
                  <input type="text" className="form-control" id="facilityLocation" placeholder='Kasoa' />
                </div>
                <div className="setUp__form">
                  <label className='setup__label'>Address</label>
                  <input type="text" className="form-control" id="facilityAddress" placeholder='Kasoa' />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">Update</button>
              <button type="button" className="btn btn-warning">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export const CategoryModal = () => {
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel"> Setup Facility</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="setUp__form">
                <label className='setup__label'>Name of Facility</label>
                <input type="text" className="form-control" id="facilityName" placeholder='Name' />
              </div>
              <div className="setUp__form">
                <label className='setup__label'>	Phone Number</label>
                <input type="text" className="form-control" id="facilityPhone" placeholder='0200000000' />
              </div>

            </form>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Update</button>
            <button type="button" className="btn btn-warning">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export const GroupsModal = () => {
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel"> Groups and Associations Setup</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="setUp__form">
                <input type="text" className="form-control" id="facilityPhone" placeholder='Groups or Associations' />
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
  )
}