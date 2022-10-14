const Checkbox = ({ name, checked, handleChange, labelText, readOnly }: any) => {
    return (
      <div className='form-row'>
        <label htmlFor={name} className='form-label'>
          {labelText || name}
        </label>
        
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className='form-checkbox'
          readOnly={readOnly || false}
        />
      </div>
    );
  };
  
  export default Checkbox;