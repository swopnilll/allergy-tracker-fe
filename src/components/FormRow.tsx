const FormRow = ({ type, name, value, handleChange, labelText, readOnly }: any) => {
    return (
      <div className='form-row'>
        <label htmlFor={name} className='form-label'>
          {labelText || name}
        </label>
        
        <input
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className='form-input'
          readOnly={readOnly || false}
        />
      </div>
    );
  };
  
  export default FormRow;