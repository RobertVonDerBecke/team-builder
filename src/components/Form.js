import React from 'react'

export default function Form(props) {
  const { values, update, submit, error } = props

  const onChange = evt => {
    const { name, value } = evt.target;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <h2>{error}</h2>
      <div className='form-group inputs'>
        <label>Username
              <input 
              type='text'
              name='username'
              value={values.username}
              onChange={onChange}
              maxLength='30'
              placeholder='Enter a Team Name:'/>
        </label>

        <label>Email
          <input 
            type='email'
            name='email'
            value={values.email}
            onChange={onChange}
            placeholder='Enter email'
            />
        </label>

        <label>Role
          <select value={values.role} name='role' onChange={onChange}>
            <option value=''>Select a Role</option>
            <option value='Ux Designer'>Ux Designer</option>
            <option value='Team Lead'>Team Lead</option>
            <option value='Data Scientist'>Data Scientist</option>
            <option value='Project Manager'>Project Manager</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
