import { Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { yellow } from '@material-ui/core/colors';
import { theme } from '../color';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    minWidth: '100%',
  },
  title: {
    color: yellow[900],
    fontWeight: 800,
    background: '-webkit-linear-gradient(0deg,#ACB6E5, #86FDE8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }
}))
export default function AuthPage() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const SubmitHandler = (event) => {
    event.preventDefault();
    console.log(name);
  }
  const NameChangeHandler = (nameValue) => {
    setName(nameValue);
  }
  return (
    <div className={classes.root}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
          <Typography className={classes.title} variant="h2" gutterBottom>Clicker Empire Game</Typography>
          <form onSubmit={SubmitHandler}>
            <label>
              Name:
              <input type='text' value={name.value} onChange={NameChangeHandler} />
            </label>
          </form>
          <button type='submit'>Start New Game</button>
      </Grid>
    </div>
  )
}
