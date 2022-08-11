import React, { useState } from 'react';

const initialState = {
  name: '',
  description: '',
  link: '',
  image_url: ''
}

const Form = (props) => {

  const [fields, setFields] = useState(initialState)
  
  const handleFieldsChange = (e) => setFields({
    ...fields, 
    //value é o valor digitado e o name é o valor que atribuímos
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleSubmit = (event) => {
    props.addPlanet(fields)
    event.preventDefault()
    setFields(initialState)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange}/>
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input id="description" type="text" name="description" value={fields.description} onChange={handleFieldsChange}/>
        </div>
        <div>
          <label htmlFor="link">Link: </label>
          <input id="link" type="text" name="link" value={fields.link} onChange={handleFieldsChange}/>
        </div>
        <div>
          <label htmlFor="image_url">Image: </label>
          <input id="image_url" type="text" name="image_url" value={fields.image_url} onChange={handleFieldsChange}/>
        </div>
        <br />
        <input type="submit" />
      </form>
    </>
  )
}

export default Form;