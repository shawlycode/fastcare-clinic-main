import {
  CategoryModal,
  FacilitySetupModal,
  GroupsModal,
} from '../../../components/modal/facilitySetup/FacilitySetupModal';
import { CiEdit } from 'react-icons/ci';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import './settings.css';
// import { useNavigate } from 'react-router-dom';

export const FacilitySetup = () => {
  return (
    <div className="settings">
      <div className="settings__container">
        <div
          type="button"
          class=" add__facility-btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          + Add Facility <FacilitySetupModal />
        </div>
        <div className="table__data indSubs-table">
          <div className="table-responsive-sm-md-lg">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col"> Facility</th>
                  <th scope="col"> Phone Number</th>
                  <th scope="col">Location</th>
                  <th scope="col"> Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td> Agbobloshie</td>
                  <td> 0200000000</td>
                  <td>Agbogloshie</td>
                  <td> ---</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td> Agbobloshie</td>
                  <td> 0200000000</td>
                  <td>Agbogloshie</td>
                  <td> ---</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td> Agbobloshie</td>
                  <td> 0200000000</td>
                  <td>Agbogloshie</td>
                  <td> ---</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export const FacilityPerformance = () => {
  return <div className="settings">Facility Performance </div>;
};
export const PackageSetup = () => {
  // const navigate = useNavigate()
  // const handleClick = () => {
  //   navigate(() => <FacilitySetupModal />)
  // }
  return (
    <div className="settings">
      <div
        type="button"
        className=" add__facility-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        + Add Package
        <FacilitySetupModal />
      </div>

      <div className="table__data indSubs-table">
        <div className="table-responsive-sm-md-lg">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"> Package</th>
                <th scope="col"> Description</th>
                <th scope="col"> Amount</th>
                <th scope="col"> ---</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">027</th>
                <td> Fastcare Premium</td>
                <td> Fastcare Premium</td>
                <td> 100</td>
                <td data-bs-toggle="modal " data-bs-target="#exampleModal">
                  <CiEdit color="black " size={'22px'} cursor={'pointer'} />
                  <FacilitySetupModal />
                </td>
              </tr>
              <tr>
                <th scope="row">036</th>
                <td> Fastcare Premium</td>
                <td> Fastcare Premium</td>
                <td> 80</td>
                <td data-bs-toggle="modal " data-bs-target="#exampleModal">
                  <CiEdit color="black " size={'22px'} cursor={'pointer'} />
                  <FacilitySetupModal />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export const CallCommentCategory = () => {
  return (
    <div className="settings">
      <div className="category__container">
        <h4>CALL COMMENT CATEGORIES</h4>
        <div
          type="button"
          className=" add__category-btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          + Add Call Comment Category
          <CategoryModal modal="new modal here" />
        </div>
        <div className="table__data indSubs-table">
          <div className="table-responsive-sm-md-lg">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col"> Category</th>
                  <th scope="col"> Description</th>
                  <th scope="col"> Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">027</th>
                  <td> Fastcare Premium</td>
                  <td> Fastcare Premium</td>
                  <td> Paid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export const GroupsAssociations = () => {
  return (
    <div className="settings">
      <div className="groups__container">
        <div className="groups__header">
          <HiOutlineUserGroup style={{ color: '#000', fontSize: '100px' }} />
          <p>
            A social group consists of two or more people who regularly interact
            on the basis of mutual expectations and who share a common
            identity.While people commonly use the terms interchangeably, there
            are distinct differences between them. Despite the differences, the
            two terms also have a few things in common.
          </p>
        </div>
        <div className="group__input">
          <input
            type="text"
            className="form-control group__input"
            id="groupSearch"
            placeholder="Search for Group"
          />
        </div>

        <div
          type="button"
          className=" add__category-btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          + Add New Group
          <GroupsModal />
        </div>
        <div className="table__data indSubs-table">
          <div className="table-responsive-sm-md-lg">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col"> Groups</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td> Potters</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td> Hairdresser Association</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td> Kantomato dress Makers</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td> Pineapple Sellers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
