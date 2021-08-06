import React from 'react';
import Adb from '@material-ui/icons/Adb';
import Counter from './Counter';
import Grid from '@material-ui/core/Grid'
import { green } from '@material-ui/core/colors';
export default function LeftBlock() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Counter />
      <Adb
        style={{color: green[400], fontSize: 100}}
      />
    </Grid>
  )
}
