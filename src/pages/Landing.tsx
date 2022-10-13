import { Link } from "react-router-dom";

import main from "../assets/images/main.svg";

import Wrapper from '../wrapperStyles/LandingPage';

import { Logo } from '../components';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        Track Your <span>Allergy</span> app
                    </h1>
                    <p>Worried about your myriad list of Allergies?
                        Register to manage and track your allergies.</p>
                    <Link to="/register" className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt='allergy track' className='img main-img' />
            </div>
        </Wrapper>
    );
};

export default Landing;