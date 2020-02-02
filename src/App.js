import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  })

  const nextStep = () => {
    setState(state => {
      step = step + 1
    })
  }
  const prevStep = () => {
    setState(state => {
      step = step - 1
    })
  }

  handleChange = input => e => {
    setState({[input]: e.target.value})
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
