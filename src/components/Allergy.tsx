import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Wrapper from '../wrapperStyles/allergy';

const Allergy = ({ id, name, severity, is_high_risk, symtoms }: any) => {
  const dispatch = useDispatch();


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
              to='/add-job'
              className='btn edit-btn'
              onClick={() => {
                console.log('edit job');
              }}
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => {
                console.log('delete  job');
              }}
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