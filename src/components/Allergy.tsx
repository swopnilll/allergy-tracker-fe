import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Wrapper from '../wrapperStyles/allergy';
import { handleDeleteAllergy, setEditJob } from '../reducers/allergy/AllergySlice';

const Allergy = ({ id, name, severity, is_high_risk, symtoms }: any) => {
  const { user } = useSelector((store: any) => store.user);

  const dispatch = useDispatch<any>();

  const handleDeleteButtonClick = () => {
    dispatch(handleDeleteAllergy({
      allergyId: id,
      userId: user.id
    }))
  }

  const handleEditButtonClick = () => {
   
    dispatch(setEditJob(
      {
        editAllergyId: id,
        name,
        severity,
        isHighRisk: is_high_risk,
        symtoms
      }
    ))
  }



  return (
    <Wrapper>

      <header>
        <div className='main-icon'>{severity}</div>
        <div className='info'>
          <h5>{name}</h5>
          <p>{symtoms}</p>
        </div>
      </header>

      <div className="content">
        <div className='content-center'>
          <div className={`status ${severity}`}>{severity}</div>
          {is_high_risk
            ? <div className={`status L5`}>IsHighRisk</div>
            : null
          }
        </div>

        <footer>
          <div className='actions'>
            <Link
              to='/add-allergy'
              className='btn edit-btn'
              onClick={handleEditButtonClick}
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={handleDeleteButtonClick}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>

    </Wrapper>
  )
}

export default Allergy