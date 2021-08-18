import { Grid, makeStyles, Typography } from '@material-ui/core'
import { render } from '@testing-library/react';
import React, { useReducer, useContext, useEffect} from 'react';
import { Reducer } from '../../../reducer/Reducer';
import { ProductsContext } from './items';
import ProductDetail from './modal/ProductDetail';

const useStyles = makeStyles({
  info: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 30,
  }
});

export default function ProductItem(props) {
  const itemContext = useContext(ProductsContext[props.name])
  const classes = useStyles();
  const [item, dispatch] = useReducer(Reducer, itemContext)

  const ToggleHandler = () => dispatch({ state: item, type: "OPEN_ITEM" });

  const GoToDetailHandler = (itemData) => {
    render(<ProductDetail itemData={itemData} />);
  };

  useEffect(() => {
     GoToDetailHandler(item)
  }, [item])

  return (
    <>
      <div className={classes.info} onClick={ToggleHandler}>
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
              {itemContext.name}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {itemContext.price}
            </Typography>
            <Typography variant="h6" gutterBottom>
              +${itemContext.effect} / sec
            </Typography>
          </Grid>
          <Typography variant="h5">count</Typography>
        </Grid>
      </div>
    </>
  )
}
