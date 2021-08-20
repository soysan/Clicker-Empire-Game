import { DialogTitle, DialogContent, DialogContentText } from '@material-ui/core'
import React from 'react'
export default function SaveOption() {
  return (
    <>
      <DialogTitle id='alert-dialog-title'>
        We saved your data
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Thank you for playing Click Empire Game.
        </DialogContentText>
      </DialogContent>
    </>
  )
}
