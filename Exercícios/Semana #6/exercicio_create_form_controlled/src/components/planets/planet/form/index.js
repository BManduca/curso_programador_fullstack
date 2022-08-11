import React, { useState } from 'react';

const initialState = {
  name: ''
}

const Form = (props) => {

  const [fields, setFields] = useState(initialState);

  const handleFieldsChange = (e) => setFields({
    ...fields, 
    //value é o valor digitado e o name é o valor que atribuímos
    [e.currentTarget.name]: e.currentTarget.value
  });

  const handleSubmit = (e) => {
    props.addSatellites(fields);
    e.preventDefault();
    setFields(initialState);
  }
 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name: 
          </label>
          <input id="name" name="name" type="text" value={fields.name} onChange={handleFieldsChange}/>
        </div>
        <br />
        <input type="submit" />
      </form>
    </>
  )
}

export default Form;