import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { FaAlignLeft, FaCaretDown, FaHome, FaUserCircle } from 'react-icons/fa'

import Wrapper from "../wrapperStyles/Navbar"
import Logo from './Logo'

import { logoutUser, toggleSideBar } from '../reducers/user/UserSlice'


const Navbar = () => {

    const { user } = useSelector((store: any) => store.user);
    const dispatch = useDispatch();

    const [showLogout, setShowLogout] = useState(false)

    const toggle = () => {
        console.log("toggling")
        dispatch(toggleSideBar());
    };

    return (
        <Wrapper>
            <div className="nav-center">
                <button type='button' className='toggle-btn' onClick={toggle}>
                    <FaAlignLeft />
                </button>

                <div>
                    <Logo />
                    <h3 className='logo-text'>dashboard</h3>
                </div>

                <div className="btn-container">
                    <button
                        type='button'
                        className='btn'
                        onClick={() => setShowLogout(!showLogout)}
                    >
                        <FaUserCircle />
                        {user?.name}
                        <FaCaretDown />
                    </button>

                    <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                        <button
                            type='button'
                            className='dropdown-btn'
                            onClick={() => {
                                setShowLogout(!showLogout)
                                dispatch(logoutUser());
                            }}
                        >
                            logout
                        </button>
                    </div>
                </div>

            </div>
        </Wrapper>
    )
}

export default Navbar