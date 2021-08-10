import { Grid } from '@material-ui/core'
import React from 'react'
import Status from './rightUp/Status'
import Products from './rightDown/Products'

export default function RightBlock() {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Status />
        <Products />
      </Grid>
    </>
  )
}
