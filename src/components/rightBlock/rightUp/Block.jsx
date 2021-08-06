import React from 'react'
import { Grid } from '@material-ui/core';
import {grey} from '@material-ui/core/colors'
export default function Block(props) {
  return (
    <Grid item xs={6}>
      <div style={{backgroundColor: grey[700]}}>
        {props.name}
      </div>
    </Grid>
  )
}
