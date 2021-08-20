import React, { useContext, useState } from 'react';
import Adb from '@material-ui/icons/Adb';
import Counter from './Counter';
import Grid from '@material-ui/core/Grid'
import { green } from '@material-ui/core/colors';
import { UserContext } from '../../context/user';
import { theme } from '../../color';

export default React.memo(function LeftBlock() {
  const user = useContext(UserContext);

  const [count, setCount] = useState(user.count);
  const [clickAmount, setClickAmount] = useState(user.addPerClick);
  const [secAmount, setSecAmount] = useState(user.addPerSec);

  const addCount = () => {
    user.count = user.count + 1;
    user.money += user.addPerClick;
  }

  const updateStatus = () => {
    addCount();
    setCount(count + 1)
    setClickAmount(user.addPerClick);
    setSecAmount(user.addPerSec);
  }

  const data = { count: count, clickAmount: clickAmount, secAmount: secAmount }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Counter user={data} />
      <div style={{
        marginTop: '5rem',
        height: '13rem',
        borderRadius: '50%',
        width: '13rem',
        backgroundColor: theme.palette.secondary.light,
      }}>
        <img alt='hamburger' src='../../assets/hamburger.png'
          style={{
            width: '10rem',
            marginTop: '1rem',
            marginLeft: '2rem'
          }}
          onClick={updateStatus}
        />
      </div>
    </Grid>
  )
})
