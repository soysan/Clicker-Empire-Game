import { Grid, makeStyles, Typography, Modal } from '@material-ui/core'
import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../../context/items';
import ProductDetail from './ProductDetail';
import { theme } from '../../../color';

const useStyles = makeStyles({
  info: {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '5px',
    padding: '16px',
    display: 'flex',
  },
  title: {
    fontSize: 30,
    fontWeight: 400,
  },
});

export default function ProductItem(props) {
  const classes = useStyles();
  const itemContext = useContext(ProductsContext[props.name])
  const [open, setOpen] = useState(false);
  const ToggleHandler = () => {
    setOpen(!open);
  }

  let effectString = '';
  switch (itemContext.type) {
    case 'ability':
      effectString = '/ click';
      break;
    case 'realEstate':
      effectString = '/ sec';
      break;
    default:
      effectString = '% / sec';
  }

  return (
    <>
      <Modal
        open={open}
        onClose={ToggleHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          position: "absolute",
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: theme.palette.secondary.light,
          borderRadius: '5px',
        }}
      >
        <ProductDetail itemData={itemContext} func={ToggleHandler} ref={0}/>
      </Modal>
      <div className={classes.info} onClick={ToggleHandler}>
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
              Price: ${itemContext.price}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Effect: +$ {itemContext.effect + effectString}
            </Typography>
          </Grid>
          <img alt={itemContext.img.replace('.png', '')} src={itemContext.img} style={{width: '8rem'}}/>
      </div>
    </>
  )
}
