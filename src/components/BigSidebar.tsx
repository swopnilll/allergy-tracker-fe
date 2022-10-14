import { useSelector } from 'react-redux';

import Logo from "./Logo";
import NavLinks from './NavLinks';

import Wrapper from "../wrapperStyles/BigSidebar";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store: any) => store.user);

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar