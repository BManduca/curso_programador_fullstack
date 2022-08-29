import React, { useState } from 'react';

const initialState = {
  name: ''
}

const Form = (props) => {
  const [fields, setFields] = useState(initialState);

  const handleFieldsChange = (event) =>
    setFields({
      ...fields,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  const handleSubmit = (event) => {
    props.addSatellite(fields);
    event.preventDefault();
    setFields(initialState);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleFieldsChange}
          />
        </div>
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;