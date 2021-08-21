import React, { useContext, useState } from 'react';
import Counter from './Counter';
import Grid from '@material-ui/core/Grid'
import { UserContext } from '../../context/user';
import { theme } from '../../color';
import zIndex from '@material-ui/core/styles/zIndex';

export default function LeftBlock() {
  const user = useContext(UserContext);

  const [count, setCount] = useState(user.count);
  const [clickAmount, setClickAmount] = useState(user.addPerClick);
  const [secAmount, setSecAmount] = useState(user.addPerSec);


  const addCount = () => {
    user.count = user.count + 1;
    user.money += user.addPerClick;
  }

  const updateStatus = () => {
    setCount(count + 1)
    addCount();
    setClickAmount(user.addPerClick);
    setSecAmount(user.addPerSec);
  }

  const data = { count: count, clickAmount: clickAmount, secAmount: secAmount };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"

    >
      <Counter user={data} />
      <div style={{
        borderRadius: '50%',
        backgroundColor: theme.palette.secondary.main,
        height: '300px',
        width: '300px',
        position: 'relative',
        marginTop: '60px'
      }}>
        <img alt='hamburger' src='../../assets/hamburger.png'
          style={{
            width: '10rem',
            position: 'absolute',
            top: '25%',
            left: '25%'
          }}
          onClick={updateStatus}
        />
      </div>
    </Grid>
  )
}
