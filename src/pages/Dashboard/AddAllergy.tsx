import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import Wrapper from '../../wrapperStyles/DashboardFormPage';

import { FormRow } from '../../components';
import Checkbox from '../../components/Checkbox';
import FormRowSelect from '../../components/FormRowSelect';

import { handleChange, clearValues, addAllergy, handleEditAllergy } from '../../reducers/allergy/AllergySlice';

const AddAllergy = () => {
  const {
    isLoading,
    isEditing,
    name,
    editAllergyId,
    severity,
    isHighRisk,
    symtoms } = useSelector((store: any) => store.allergy);

    console.log("isHighRisk", isHighRisk);

  const { user } = useSelector((store: any) => store.user)

  const dispatch = useDispatch<any>();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!name || !severity || !symtoms) {
      toast.error('Please Fill Out All Fields');
      return;
    }

    if (isEditing) {
      console.log(isHighRisk)
      dispatch(handleEditAllergy({
        name,
        severity,
        isHighRisk,
        symtoms,
        editAllergyId
      }))
    } else {
      dispatch(addAllergy({
        name,
        severity,
        isHighRisk,
        symtoms,
        userId: user.id
      }))
    }

    console.log("before clear dispatch")

    dispatch(clearValues());
  };

  const handleInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleChange({ name, value }))
  };

  const handleCheckBoxChange = (e: any) => {
    console.log("handle checkbox change")
    const name = "isHighRisk";

    console.log(e.target.checked);

    dispatch(handleChange({ name, value: e.target.checked }))
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
          list={["L1", "L2", "L3", "L4", "L5"]}
        />

        <FormRow
          type='text'
          name='symtoms'
          value={symtoms}
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