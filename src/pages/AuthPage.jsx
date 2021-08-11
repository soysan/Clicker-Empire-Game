import { Grid } from '@material-ui/core'
import React, { useState } from 'react'

export default function AuthPage() {
  const [name, setName] = useState('');
  const SubmitHandler = (event) => {
    event.preventDefault();
    console.log(name);
  }
  const NameChangeHandler = (nameValue) => {
    setName(nameValue);
  }
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <h1>Clicker Empier Game</h1>
        <form onSubmit={SubmitHandler}>
          <label>
            Name:
            <input type='text' value={name.value} onChange={NameChangeHandler} />
          </label>
          <button type='submit'>Start New Game</button>
        </form>
      </Grid>
    </div>
  )
}
