import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { FormRow } from '../../components';

import Wrapper from '../../wrapperStyles/DashboardFormPage';

const Profile = () => {
  const { isLoading, user } = useSelector((store: any) => store.user);

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || ''
  })



  return (
    <Wrapper>
      <form className='form' >
        <h3>profile</h3>

        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={userData.name}
            readOnly={true}
          />

          <FormRow
            type='email'
            name='email'
            value={userData.email}
            readOnly={true}
          />

        </div>
      </form>
    </Wrapper>
  )
}

export default Profile