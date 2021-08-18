import React, { useContext, useRef, useState } from 'react'
import { Button, Modal, Typography, Grid, Box } from '@material-ui/core'
import { green } from '@material-ui/core/colors';
import { UserContext } from '../../../../App';

export default function ProductDetail(props) {
  const user = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(props.itemData.isOpen);
  const numRef = useRef(null);
  const ToggleOpenHandler = () => {
    setIsOpen(!isOpen);
  }
  const EffectShoppingHandler = () => {
    // user.items.push(props.effect);
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={ToggleOpenHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          position: "absolute",
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: green[100],
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
          >
            <Typography id="modal-modal-title" variant="h3" component="h2">{props.itemData.name}</Typography>
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
              <Button onClick={ToggleOpenHandler}>Go back</Button>
              <Button onClick={EffectShoppingHandler}>Purchase</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}
