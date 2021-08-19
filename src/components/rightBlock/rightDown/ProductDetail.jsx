import React, { useContext, useRef } from 'react'
import { Button, Typography, Grid, Box } from '@material-ui/core'
import { UserContext } from '../../../App';

export default React.forwardRef(function ProductDetail(props, ref){
  const item = props.itemData;
  const user = useContext(UserContext);
  const numRef = useRef(ref);

  const EffectShoppingHandler = () => {
    const times = Number(numRef.current.value);
    console.log(item)
    if (item.maxVal === 0) return alert("We are out of stock. You hold everything")
    if (times > item.maxVal) return alert("We don't have the amount");
    if (times <= 0) return alert("Please type how many you want.");

    const effectAmount = times * item.price;
    if (effectAmount > user.money) return alert("You don't have enough money");

    switch (item.type) {
      case 'ability':
        user.items.push(item.name);
        user.money -= effectAmount;
        user.addPerClick += item.effect * times;
        item.maxVal -= times;
        break;
      case 'realEstate':
        user.items.push(item.name);
        user.money -= effectAmount;
        user.addPerSec += item.effect * times;
        item.maxVal -= times;
        break;
      default:
        user.items.push(item.name);
        user.money -= effectAmount;
        if (item.name === 'ETF Stock') item.price += Math.floor(item.price * 0.1 * times);
        user.stock += times;
        let total = 0;
        if (item.name === 'ETF Stock') {
          for (let i = 0; i < times; i++) {
            total += parseInt(item.price * Math.pow(1 + item.effect, i));
          }
        }
        user.addPerSec += total;
    }
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
