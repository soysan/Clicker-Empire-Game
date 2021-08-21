import { DialogTitle, DialogContent, DialogContentText } from '@material-ui/core'
import React from 'react'
export default function SaveOption() {
  return (
    <>
      <DialogTitle id='alert-dialog-title'>
        Playing Data をセーブしました
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          ここまで遊んでくれてありがとうございます！
        </DialogContentText>
      </DialogContent>
    </>
  )
}
