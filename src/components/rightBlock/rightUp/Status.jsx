import { Grid } from '@material-ui/core';
import React from 'react'
import Block from './Block';

export default function Status() {
  const userData = ["Steven", "25 years old", "123 days", "$23412"];
  return (
    <>
      <Grid
        container
        spacing={1}
      >
        {userData.map((val) => (
          <Block key={val} name={val} />
        ))}
      </Grid>
    </>
  )
}
