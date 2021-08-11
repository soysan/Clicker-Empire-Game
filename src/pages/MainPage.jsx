import React from 'react'
import { Grid } from '@material-ui/core';
import LeftBlock from '../components/leftBlock/LeftBlock';
import RightBlock from '../components/rightBlock/RightBlock';
import Options from '../components/rightBlock/Options';

export default function MainPage() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <LeftBlock />
        </Grid>
        <Grid item xs={6}>
          <RightBlock />
        </Grid>
      </Grid>
      <Options />
    </div>
  )
}
