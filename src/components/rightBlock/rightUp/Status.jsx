import { Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App.js';
import Block from './Block';

export default function Status() {
  const userData = useContext(UserContext);
  const [age, setAge] = useState(userData.age);
  const [days, setDays] = useState(userData.days);
  const [amountMoney, setAmountMoney] = useState(userData.money);

  const birthdayOfUser = () => {
    if (days === 365) setAge(age + 1);
    if (age !== 20 && days % 365 === 0) {
      userData.age += 1;
      setAge(age + 1);
    }
  }
  const moveMoney = () => {
    setAmountMoney(userData.money)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDays(days + 1);
      userData.days += 1;
      birthdayOfUser();
      moveMoney();
    }, 1000);
    return () => { clearInterval(intervalId) };
  }, [userData, days, age, amountMoney, birthdayOfUser, moveMoney]);

  return (
    <>
      <Grid
        container
        spacing={1}
        style={{
          backgroundColor: grey[200],
          marginBottom: 20
        }}
      >
        <Block name={userData.name} />
        <Block name={age} />
        <Block name={userData.days} />
        <Block name={amountMoney} />
      </Grid>
    </>
  )
}
