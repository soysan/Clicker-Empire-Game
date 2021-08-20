import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { theme } from '../../color';

export default function Counter(props) {
  const data = props.user;

  return (
    <>
      <Grid
        style={{ backgroundColor: theme.palette.primary.main, borderRadius: '5px' }}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid direction="row" container justifyContent="center" alignItems="center">
          <Typography variant="h4" gutterBottom>{data.count}</Typography>
          <Typography variant="h6" gutterBottom> /count</Typography>
        </Grid>
        <Grid direction="row" container justifyContent="center" alignItems="center">
          <Typography variant="h4" gutterBottom>${data.clickAmount}</Typography>
          <Typography variant="h6" gutterBottom> /click</Typography>
        </Grid>
        <Grid direction="row" container justifyContent="center" alignItems="center">
          <Typography variant="h4" gutterBottom>${data.secAmount}</Typography>
          <Typography variant="h6" gutterBottom> /sec</Typography>
        </Grid>
      </Grid>
    </>
  )
}
