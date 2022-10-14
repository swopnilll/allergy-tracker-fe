import { FaTimes } from "react-icons/fa"

import { useSelector, useDispatch } from 'react-redux';

import Wrapper from "../wrapperStyles/SmallSidebar"

import { toggleSideBar } from '../reducers/users/UserSlice'


import Logo from "./Logo"

import NavLinks from './NavLinks'

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store: any) => store.user);

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSideBar());
  };


  return (
    <Wrapper>
      <div className={isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className='content'>
          <button className='close-btn' onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggle}></NavLinks>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar