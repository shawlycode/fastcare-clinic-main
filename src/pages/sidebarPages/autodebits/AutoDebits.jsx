

import logo from '../../../assets/fcclogo.png'
import MandateModal from '../../../components/modal/mandate/MandateModal';
import './autodebits.css'
import { MdCreateNewFolder } from "react-icons/md";




export const CheckMandateDetails = () => {
  return (
    <div className='autodebits'>
      <h1>Check Mandate Details</h1>
    </div>
  );
};
export const UnMandatedSubscribers = () => {

  return (
    <div className='autodebits'>
      <main>
        <div className="header">
          <div ><img src={logo} alt="" className="logo__1" /></div>
        </div>
        <h3>Fetch Un-Mandated Subscribers</h3>
        <div className="text">
          <p>    Get all registered subscribers without Recurring Debit Mandates</p>
        </div>
        <div className="input">
          <input type='search' placeholder='Search' />
        </div>
        <div className="table__data indSubs-table auto__table">
          <div className="table-responsive-sm-md-lg">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">MID</th>
                  <th scope="col">Subscriber</th>
                  <th scope="col">Package</th>
                  <th scope="col">Type</th>
                  <th scope="col">Momo</th>
                  <th scope="col">DoS</th>
                  <th scope="col">Facility</th>
                  <th scope="col">Agent</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Network</th>
                  <th scope="col">Create Mandate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>PNOP10013625</td>
                  <td>Owura Kwasi Adabo</td>
                  <td>Fastcare Premium</td>
                  <td>Individual</td>
                  <td> 0241013330</td>
                  <td> Jan 10 2024 5:01AM</td>
                  <td> New Town</td>
                  <td> Kwasi Adabo</td>
                  <td> 5</td>
                  <td> MTN</td>
                  <div className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <MandateModal />
                    <td><MdCreateNewFolder color="green " size={'20px'} cursor={'pointer'} /></td> <span className='create'>Create</span>
                  </div>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>GNOG10013626</td>
                  <td>Gifty - Adutwum</td>
                  <td>Fastcare Premium</td>
                  <td>Individual</td>
                  <td> 0241013330</td>
                  <td> Jan 10 2024 5:01AM</td>
                  <td> New Town</td>
                  <td> Kwasi Adabo</td>
                  <td> 5</td>
                  <td> MTN</td>
                  <div className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <MandateModal />
                    <td><MdCreateNewFolder color="green " size={'20px'} cursor={'pointer'} /></td> <span className='create'>Create</span>
                  </div>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>PNOP10013628</td>
                  <td>Frank Apea Owusu</td>
                  <td>Fastcare Premium</td>
                  <td>Individual</td>
                  <td> 0241013330</td>
                  <td> Jan 10 2024 5:01AM</td>
                  <td> New Town</td>
                  <td> Kwasi Adabo</td>
                  <td> 5</td>
                  <td> MTN</td>
                  <div className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <MandateModal />
                    <td><MdCreateNewFolder color="green " size={'20px'} cursor={'pointer'} /></td> <span className='create'>Create</span>
                  </div>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>FNOF10000001</td>
                  <td>Ampah</td>
                  <td>Fastcare Premium</td>
                  <td>Individual</td>
                  <td> 0241013330</td>
                  <td> Jan 10 2024 5:01AM</td>
                  <td> New Town</td>
                  <td> Kwasi Adabo</td>
                  <td> 5</td>
                  <td> MTN</td>
                  <div className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <MandateModal />
                    <td><MdCreateNewFolder color="green " size={'20px'} cursor={'pointer'} /></td> <span className='create'>Create</span>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};