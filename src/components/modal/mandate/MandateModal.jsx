import React from 'react'
import { CiWarning } from "react-icons/ci";
// import 'mandate.css'
const MandateModal = () => {
  return (
    <>




      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div className="modal-content">
            <div className="modal-header " >
              <CiWarning style={{ color: 'blue', fontSize: '120px', alignItems: "center" }} />
            </div>
            <div class="modal-body">
              <h1>Mandate Creation !</h1>
              <p>Duplicate ThirdParty Ref</p>
            </div>
            <div class="modal-footer">

              <button type="button" class="btn btn-primary">Ok</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MandateModal
