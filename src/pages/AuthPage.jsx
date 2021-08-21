import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useRef, useContext } from 'react'
import { yellow } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import { UserContext, UserState } from '../context/user';


const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    minWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: yellow[900],
    fontWeight: 800,
    background: '-webkit-linear-gradient(0deg,#ACB6E5, #86FDE8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  subtitle: {
    fontWeight: 300
  }
}))

export default function AuthPage() {
  const classes = useStyles();
  const nameRef = useRef('');
  const history = useHistory();
  const userData = useContext(UserContext);

  const RenderMainPage = () => {
    history.push('/main')
  }

  const SubmitNewHandler = (e) => {
    e.preventDefault();
    if (nameRef.current.value.toLowerCase() === 'cheater') {
      userData.money = 10000000000;
      userData.name = 'Cheater';
    } else {
      userData.name = nameRef.current.value;
    }
    RenderMainPage();
  }

  const SubmitLoadHandler = (e) => {
    e.preventDefault();
    const storage = localStorage.getItem(UserState);
    if (storage == null) return alert('入力が違うかデータがありません');
    const prevUserData = JSON.parse(storage);
    userData.name = prevUserData.name;
    userData.age = prevUserData.age;
    userData.days = prevUserData.days;
    userData.money = prevUserData.money;
    userData.addPerClick = prevUserData.addPerClick;
    userData.addPerSec = prevUserData.addPerSec;
    userData.count = prevUserData.count;
    userData.stock = prevUserData.stock;
    RenderMainPage();
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Typography
          className={classes.title}
          variant="h2"
          gutterBottom
        >
          Clicker Empire Game
        </Typography>
        <Typography
          variant='h5'
          gutterBottom
          className={classes.subtitle}
        >
          Achieve your dream from zero!
        </Typography>
        <form onSubmit={SubmitNewHandler}>
          <TextField
            id='nameInput'
            label='Type your name here'
            variant="standard"
            inputRef={nameRef}
            required
          />
        </form>
        <Grid style={{ margin: '16px' }}>
          <Button
            style={{ marginRight: '16px' }}
            variant="contained"
            size='medium'
            type='submit'
            onClick={SubmitNewHandler}
          >
            Start New Game
          </Button>
          <Button
            style={{ marginLeft: '16px' }}
            variant="outlined"
            size='medium'
            type='submit'
            onClick={SubmitLoadHandler}
          >
            Load Your Data
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
