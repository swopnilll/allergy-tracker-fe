import { useSelector, useDispatch } from 'react-redux';
import { clearFilters, handleChange } from '../reducers/allAllergies/AllAllergySlice';

import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';

import Wrapper from '../wrapperStyles/SearchContainer';

const SearchContainer = () => {

  const { isLoading, search, sort, sortOptions } =
    useSelector((store: any) => store.allAllergies);

  const dispatch = useDispatch<any>();

  const handleSearch = (e: any) => {
    if (isLoading) return;

    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <Wrapper >
      <div className="form">
        <h4>search form</h4>

        <FormRow
          type='text'
          name='search'
          value={search}
          handleChange={handleSearch}
        />

        {/* <FormRowSelect
          name='sort'
          value={sort}
          handleChange={handleSearch}
          list={sortOptions}
        /> */}

        {/* <button
          className='btn btn-block btn-danger'
          disabled={isLoading}
          onClick={handleSubmit}
        >
          clear filters
        </button> */}

      </div>
    </Wrapper>
  )
}

export default SearchContainer