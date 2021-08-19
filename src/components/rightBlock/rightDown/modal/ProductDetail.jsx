import React, { useContext, useRef } from 'react'
import { Button, Typography, Grid, Box } from '@material-ui/core'
import { UserContext } from '../../../../App';

export default function ProductDetail(props) {
  const user = useContext(UserContext);
  const numRef = useRef(null);

  const EffectShoppingHandler = () => {
    const effectAmount = numRef * props.effect;
    if (effectAmount > user.money) return alert("You don't have enough money");
    user.items.push(props.effect);
  };


  return (
    <Box>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
      >
        <Typography id="modal-modal-title" variant="h3" component="h2">{props.itemData.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {props.itemData.desc}
        </Typography>

        <input type='number' placeholder={0} ref={numRef} />
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          {/* <Button>Go back</Button> */}
          <Button onClick={EffectShoppingHandler}>Purchase</Button>
        </Grid>
      </Grid>
    </Box>
  )
}
