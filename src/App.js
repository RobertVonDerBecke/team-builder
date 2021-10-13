import './App.css';
import React, { useState, useEffect } from 'react'
import Teammates from './components/Teammates';
import Form from './components/Form'


const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const [teammates, setteammates] = useState([]) 
  const [errorTest, setErrorText ] = useState("");
  const [formValues, setFormValues] = useState(initialFormValues) 

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newTeammate = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role

    }
    if(!newTeammate.username || !newTeammate.email || !newTeammate.role) {
      setErrorText('You have to enter text in all fields');
      return;
    }
    setteammates([newTeammate, ...teammates]);
    setErrorText('');
  }

  return (
    <div className="App container">
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      error={errorTest}
      />
      {
        teammates.map(teammate => {
          return (
            <Teammates key={teammate.id} details={teammate} />

          )
        })
      }
    </div>
  );
}

export default App;
