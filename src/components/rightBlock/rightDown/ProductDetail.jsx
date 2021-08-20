import React, { useContext, useReducer, useRef, useState } from 'react'
import { Button, Typography, Grid, Box, Dialog } from '@material-ui/core'
import { UserContext } from '../../../context/user';
import { Reducer } from '../../../reducer/Reducer';
import ErrorAlert from './ErrorAlert';

export default React.forwardRef(function ProductDetail(props, ref) {
  const item = props.itemData;
  const user = useContext(UserContext);
  const numRef = useRef(ref);
  const [userState, dispatch] = useReducer(Reducer, user);
  const [alertOpen, setAlertOpen] = useState(false);
  const [message, setMessage] = useState("");

  const ToggleAlertHandler = () => {
    setAlertOpen(!alertOpen);
  }

  const EffectShoppingHandler = () => {
    const times = Number(numRef.current.value);
    const amount = ValidValue(times);
    if ((typeof amount) === 'string') {
      setMessage(amount);
      ToggleAlertHandler();
      return;
    }
    dispatch({ state: userState, type: item.type, amount: amount, times: times, item: item })
  }

  const ValidValue = (times) => {
    let err = '';
    const effectAmount = times * item.price;
    if (item.maxVal === 0) err = "We are out of stock. You hold everything";
    else if (times > item.maxVal) err = "We don't have the amount";
    else if (times <= 0) err = "Please type how many you want.";
    else if (effectAmount > user.money) err = "You don't have enough money";

    return err.length === 0 ? effectAmount : err;
  }

  return (
    <>
      <Dialog
        open={alertOpen}
        onClose={ToggleAlertHandler}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <ErrorAlert message={message} />
      </Dialog>
      <Box>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
        >
          <img alt="" src={item.img} style={{ width: '50px' }}/>
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
    </>
  )
})
