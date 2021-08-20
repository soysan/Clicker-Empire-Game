import React, { useContext, useReducer, useRef } from 'react'
import { Button, Typography, Grid, Box } from '@material-ui/core'
import { UserContext } from '../../../context/user';
import { Reducer } from '../../../reducer/Reducer';

export default React.forwardRef(function ProductDetail(props, ref){
  const item = props.itemData;
  const user = useContext(UserContext);
  const numRef = useRef(ref);
  const [userState, dispatch] = useReducer(Reducer, user);

  const EffectShoppingHandler = () => {
    const times = Number(numRef.current.value);
    if (item.maxVal === 0) return alert("We are out of stock. You hold everything")
    if (times > item.maxVal) return alert("We don't have the amount");
    if (times <= 0) return alert("Please type how many you want.");

    const effectAmount = times * item.price;
    if (effectAmount > user.money) return alert("You don't have enough money");

    dispatch({state: userState, type: item.type, amount: effectAmount, times: times, item: item})
  }

  return (
    <Box>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
      >
        <Typography id="modal-modal-title" variant="h3" component="h2">{item.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {item.desc}
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
})