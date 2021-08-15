import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

export default function Counter(props) {
  return (
    <>
      <Grid
        style={{ backgroundColor: blue[300], }}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid direction="row" container justifyContent="center" alignItems="center">
          <Typography variant="h4" gutterBottom>{props.userData.count}</Typography>
          <Typography variant="h6" gutterBottom> /count</Typography>
        </Grid>
        <Grid direction="row" container justifyContent="center" alignItems="center">
          <Typography variant="h4" gutterBottom>${props.userData.addPerClick}</Typography>
          <Typography variant="h6" gutterBottom> /click</Typography>
        </Grid>
        <Grid direction="row" container justifyContent="center" alignItems="center">
          <Typography variant="h4" gutterBottom>${props.userData.addPerSec}</Typography>
          <Typography variant="h6" gutterBottom> /sec</Typography>
        </Grid>
      </Grid>
    </>
  )
}
