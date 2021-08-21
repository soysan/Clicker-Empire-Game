import React, { useState } from 'react'
import { DialogContent, DialogTitle, Button, Dialog, Grid } from '@material-ui/core'
import { UserState } from '../../../context/user'
import { useHistory } from 'react-router-dom';

export default function RestoreOption(props) {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const ToggleHandler = () => {
    setOpen(!open);
  }
  const RestoreHandler = () => {
    localStorage.removeItem(UserState);
    ToggleHandler();
    setTimeout(() => {
      history.push('/')
    }, 2000)
  }
  
  return (
    <>
      <Dialog
        open={open}
        onClose={ToggleHandler}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle>Restored all data.</DialogTitle>
      </Dialog>
      <DialogTitle id='alert-dialog-title'>
        本当に全ての Play Data を消しますか？
      </DialogTitle>
      <DialogContent>
        <Grid
          container
          justifyContent="center"
        >
          <Button
            variant='contained'
            onClick={RestoreHandler}
            style={{marginRight: '2rem'}}
          >
            Yes
          </Button>
          <Button
            variant='outlined'
            onClick={props.func}
            style={{marginLeft: '2rem'}}
          >
            No
          </Button>
        </Grid>
      </DialogContent>
    </>
  )
}
