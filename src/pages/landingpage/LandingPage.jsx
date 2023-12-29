import './landingpage.css'
import { useNavigate } from 'react-router-dom'
import gif from '../../assets/gif.gif'
import logo from '../../assets/fcclogo.png'

const LandingPage = () => {
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/login')
  }
  return (
    <div className="container-1">
      <div className="logo__container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="landing__page">
        <div className="left__container">
          <h3>Welcome to Fastcare clinics Subscription Portal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet a
            sunt in deserunt rerum nemo porro est et ab tenetur, aliquid
            quibusdam doloremque consequuntur voluptatem, placeat, modi suscipit
            ad laboriosam. Quibusdam ipsa vel officia quas facere{' '}
          </p>

          <div className="btn__container">
            <button type="button" class="btn btn-warning" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
        <div className="right__container">
          <div className="header__right-profile">
            <img src={gif} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default LandingPage
