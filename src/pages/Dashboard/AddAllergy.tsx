import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import Wrapper from '../../wrapperStyles/DashboardFormPage';

import { FormRow } from '../../components';
import Checkbox from '../../components/Checkbox';
import FormRowSelect from '../../components/FormRowSelect';

import { handleChange, clearValues, addAllergy } from '../../reducers/allergy/AllergySlice';

const AddAllergy = () => {
  const {
    isLoading,
    isEditing,
    name,
    severity,
    isHighRisk,
    description } = useSelector((store: any) => store.allergy);

  const { user } = useSelector((store: any) => store.user)

  const dispatch = useDispatch<any>();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!name || !severity || !description) {
      toast.error('Please Fill Out All Fields');
      return;
    }

    dispatch(addAllergy({
      name,
      severity,
      isHighRisk,
      description,
      userId: user.id
    }))

    dispatch(clearValues());
  };

  const handleInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log({ name, value })

    dispatch(handleChange({ name, value }))
  };

  const handleCheckBoxChange = (e: any) => {
    console.log(e.target.checked)

    const name = "isHighRisk";
    const value = e.target.checked;

    dispatch(handleChange({ name, value }))
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit allergy' : 'add allergy'}</h3>

        <FormRow
          type='text'
          name='name'
          value={name}
          handleChange={handleInput}
        />

        <FormRowSelect
          name='severity'
          value={severity}
          handleChange={handleInput}
          list={["L1", "L2", "L3", "L4", "l5"]}
        />

        <FormRow
          type='text'
          name='description'
          value={description}
          handleChange={handleInput}
        />

        <Checkbox
          name='isHighRisk'
          checked={isHighRisk}
          handleChange={handleCheckBoxChange}
          className="add-allergy-checkbox"
        />

        <div className='btn-container'>
          <button
            type='button'
            className='btn btn-block clear-btn'
            onClick={() => dispatch(clearValues())}
          >
            clear
          </button>
          <button
            type='submit'
            className='btn btn-block submit-btn'
            onClick={handleSubmit}
            disabled={isLoading}
          >
            submit
          </button>
        </div>

      </form>
    </Wrapper>
  )
}

export default AddAllergy