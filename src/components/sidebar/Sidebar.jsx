import React, { useState } from 'react'
import '../../components/sidebar/sidebar.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaLock, FaLockOpen } from 'react-icons/fa6'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'
import Logout from '../../pages/logout/Logout'
import './sidebar.css'
import logo from '../../assets/fcclogo.png'
import auth from '../../components/services/authService'

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.1rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const SidebarNav = styled.nav`
  background: #023e8a;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  padding-top: 30px;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`

const Sidebar = ({ children }) => {
  const user = auth.getCurrentUser()

  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="icon__container">
          <NavIcon to="#">
            <FaLock onClick={showSidebar} className="icon-nav" />
          </NavIcon>
          <div className="profile__container">
            <p className="text">{`Welcome,  ${user.fullName}`}</p>
            <div className="logout">
              <Logout />
            </div>
          </div>
        </div>
        <SidebarNav sidebar={sidebar} className="sidebar">
          <div className="logo__nav">
            <img src={logo} alt="" />
          </div>
          <div className="sidebar__wrapper">
            <NavIcon to="#">
              <FaLockOpen onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />
            })}
          </div>
        </SidebarNav>
        <div>{children}</div>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar
