import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getAllAllergy } from '../reducers/allAllergies/AllAllergySlice';

import Wrapper from '../wrapperStyles/allergiesContainer';

import Allergy from './Allergy';
import Loading from './Loading';


const AllergiesContainer = () => {
  const { user } = useSelector((store: any) => store.user);
  const { allergies, isLoading } = useSelector((store: any) => store.allAllergies);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getAllAllergy(user.id))
  }, []);

  if (isLoading) {
    return (
      <Loading center />
    );
  }

  if (allergies.length === 0) {
    return (
      <Wrapper>
        <h2>No allergies to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>allergy info</h5>
      <div className='allergies'>
        {allergies.map((allergy: any) => {
          return <Allergy key={allergy.id} {...allergy} />;
        })}
      </div>
    </Wrapper>
  )
}

export default AllergiesContainer