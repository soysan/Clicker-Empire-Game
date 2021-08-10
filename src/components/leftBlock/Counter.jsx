import React from 'react'
import { Grid } from '@material-ui/core';
import { blue } from '@material-ui/core/colors'
export default function Counter() {
  return (
    <>
      <Grid
        style={{ backgroundColor: blue[300], }}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <h2>1000 count</h2>
        <p>$40 per second</p>
      </Grid>
    </>
  )
}
