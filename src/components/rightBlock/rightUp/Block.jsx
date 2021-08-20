import React from 'react'
import { Grid } from '@material-ui/core';
import { theme } from '../../../color';

export default function Block(props) {
  return (
    <Grid item xs={6}>
      <div style={{
        backgroundColor: theme.palette.primary.light,
        margin: '4px',
        padding: '8px',
        borderRadius: '5px',
        fontWeight: 400,
      }}>
        {props.title}
        <span>: </span>
        {props.name}
      </div>
    </Grid>
  )
}
