import React, { useContext, useEffect, useState } from 'react';
import Adb from '@material-ui/icons/Adb';
import Counter from './Counter';
import Grid from '@material-ui/core/Grid'
import { green } from '@material-ui/core/colors';
import { UserContext } from '../../context/user';

export default React.memo(function LeftBlock() {
  console.log('leftBlock open')
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

  useEffect(() => {
    setClickAmount(user.addPerClick);
    setSecAmount(user.addPerSec)
  }, [user.addPerClick, user.addPerSec])

  const data = { count: count, clickAmount: clickAmount, secAmount: secAmount }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Counter user={data} />
      <Adb
        style={{ color: green[400], fontSize: 100 }}
        onClick={updateStatus}
      />
    </Grid>
  )
})
