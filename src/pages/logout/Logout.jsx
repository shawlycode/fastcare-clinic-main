import { useNavigate } from 'react-router-dom';
import './logout.css';
import { FaUserTie } from 'react-icons/fa';
import { PiGearSix } from 'react-icons/pi';
import { RiLogoutCircleLine } from 'react-icons/ri';


const Logout = () => {

  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault()
    navigate('/')

  }
  return (
    <div class="dropdown">
      <div
        class=" dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ><FaUserTie /></div>
      <div class="dropdown-menu">
        <div className="logout__container">
          <div className="logout__items">
            <FaUserTie />
            <a href="/accounts">Accounts</a>
          </div>
          <div className="logout__items">
            <PiGearSix />
            <a href="/settings">Settings</a>
          </div>
          <div className="logout__items">
            <RiLogoutCircleLine />
            <a href="/logout" onClick={handleLogout}>LogOut</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
