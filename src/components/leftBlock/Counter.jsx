import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { theme } from '../../color';

const styles = makeStyles(() => ({
  root: {
    padding: '6px',
    backgroundColor: theme.palette.primary.main, borderRadius: '5px'
  },
  box: {
    backgroundColor: theme.palette.primary.light,
    margin: '5px 0',
    borderRadius: '5px',
  }
}))
export default function Counter(props) {
  const user = props.user;
  const classes = styles();

  return (
    <>
      <Grid
        className={classes.root}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid direction="row" container justifyContent="center" alignItems="center"
          className={classes.box}
        >
          <Typography variant="h4" gutterBottom>{user.count}</Typography>
          <Typography variant="h6" gutterBottom> /count</Typography>
        </Grid>
        <Grid direction="row" container justifyContent="center" alignItems="center"
        className={classes.box}>
          <Typography variant="h4" gutterBottom>${user.clickAmount}</Typography>
          <Typography variant="h6" gutterBottom> /click</Typography>
        </Grid>
        <Grid direction="row" container justifyContent="center" alignItems="center"
        className={classes.box}>
          <Typography variant="h4" gutterBottom>${user.secAmount}</Typography>
          <Typography variant="h6" gutterBottom> /sec</Typography>
        </Grid>
      </Grid>
    </>
  )
}
