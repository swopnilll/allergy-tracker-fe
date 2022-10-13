import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux';

import { loginUser, registerUser } from '../reducers/user/UserSlice';

import { FormRow, Logo } from '../components'

import Wrapper from '../wrapperStyles/RegisterPage'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const { isLoading, user } = useSelector((store: any) => store.user);

  const [values, setValues] = useState(initialState);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      toast.error('Please Fill Out All Fields');
      return;
    }

    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }

    dispatch(registerUser({ name, email, password }));

  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 800);
    }
  }, [user, navigate]);

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />

        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}

        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />

        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />

        <button type='submit' className='btn btn-block'>
          submit
        </button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}

          <button type='button' onClick={toggleMember} className='member-btn' disabled={isLoading}>
            {isLoading ? 'Loading.....' : values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register