import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
  info: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  }
})
export default function ProductItem(props) {
  const classes = useStyles();

  const GoToDetailHandler = (props) => {
    console.log(props)
  };

  return (
    <>
      <div className={classes.root} onClick={(props) => GoToDetailHandler(props)}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography className={classes.title} variant="h1" gutterBottom>
              {props.itemData.name}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {props.itemData.price}
            </Typography>
            <Typography variant="h6" gutterBottom>
              +${props.itemData.capacity} / sec
            </Typography>
          </Grid>
          <Typography variant="h5">count</Typography>
        </Grid>
      </div>
    </>
  )
}
