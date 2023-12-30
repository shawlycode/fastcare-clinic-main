import React, { useState, useEffect } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import gif from '../../assets/gif.gif'
import logo from '../../assets/fcclogo.png'
import auth from '../../components/services/authService'
import Joi from 'joi-browser'
import Swal from 'sweetalert2'

const Login = () => {
  const [render, setRender] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function logOut() {
      auth.logout()
    }
    logOut()
  }, [render])
  const schemaMap = {
    email: Joi.string().required().label('email'),
    password: Joi.string().required().label('Password'),
  }

  // setTimeout(() => {
  //   auth.logout()
  //   history.push('/login')
  // }, 150000)

  const schema = Joi.object(schemaMap)

  const validateForm = () => {
    const result = Joi.validate(formData, schema)
    if (result.error) {
      return result.error.details[0].message
    } else {
      return null
    }
    //toast.error(result.error.details[0].message);
  }

  const navigate = useNavigate()

  // const handleLogin = (e) => {
  //   e.preventDefault()
  //   navigate('/sidebar')
  // }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const { email, password } = formData
      const validate = validateForm()
      if (validate !== null) {
        return Swal.fire('OOPS !', validate, 'error')
      }
      await auth.login(email, password)
      const user = auth.getCurrentUser()
      console.log(user)
      if (user.status === 'Change Required') {
        navigate('/resetpassword')
      } else {
        navigate('/dashboard')
      }
      setLoading(false)
    } catch (ex) {
      setLoading(false)
      if (ex.response && ex.response.status === 400) {
        return Swal.fire({
          title: 'LOGIN FAILED',
          text: 'Incorrect email or Password !',
          icon: 'error',
          timer: 3000,
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
          footer: 'Login failed',
        })
      }
      setLoading(false)
    }
    setLoading(false)
  }

  return (
    <section>
      <div className="container ">
        <div className="form__container">
          <div className="logo__container">
            <img src={logo} alt="logo" className="logo m-3" />
          </div>
          <h4 className="m-3">Sign in </h4>
          <p>
            Please note that you must be a registered user to get access to the
            FastCare Subscription system. Please contact systems administrator
            for your credentials .
          </p>
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={formData.email}
              invalid
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.currentTarget.value,
                })
              }
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.currentTarget.value,
                })
              }
            />
          </div>

          <button class="btn btn-primary" onClick={handleSubmit}>
            Sign in
          </button>
          {/* </form> */}
        </div>
        <div className="form__right">
          <img src={gif} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Login
