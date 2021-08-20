import { Grid } from '@material-ui/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { theme } from '../../../color';
import { UserContext } from '../../../context/user';
import Block from './Block';

export default function Status() {
  const userData = useContext(UserContext);
  const [age, setAge] = useState(userData.age);
  const [days, setDays] = useState(userData.days);
  const [amountMoney, setAmountMoney] = useState(userData.money);

  const birthdayOfUser = useCallback(() => {
    if (days === 365) setAge(age + 1);
    if (age !== 20 && days % 365 === 0) {
      userData.age += 1;
      setAge(age + 1);
    }
  }, [age, days, userData]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDays(days + 1);
      userData.days += 1;
      birthdayOfUser();
      setAmountMoney(userData.money + userData.addPerSec);
      userData.money += userData.addPerSec;
    }, 1000);
    return () => { clearInterval(intervalId) };
  }, [userData, days, amountMoney, birthdayOfUser]);

  return (
    <>
      <Grid
        container
        spacing={1}
        style={{
          backgroundColor: theme.palette.primary.main,
          marginBottom: 20,
          borderRadius: '5px'
        }}
      >
        <Block title='User' name={userData.name} />
        <Block title='Age' name={age} />
        <Block title='Days' name={days} />
        <Block title='$' name={amountMoney} />
      </Grid>
    </>
  )
}
