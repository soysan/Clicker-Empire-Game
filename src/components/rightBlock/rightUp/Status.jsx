import { Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React, { useContext } from 'react';
import { UserContext } from '../../../App.js';
import Block from './Block';

export default function Status() {
  const userData = useContext(UserContext);

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
        <Block name={userData.age} />
        <Block name={userData.days} />
        <Block name={userData.money} />
      </Grid>
    </>
  )
}
