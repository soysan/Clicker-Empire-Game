import { DialogTitle, DialogContent, DialogContentText } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
export default function SaveOption() {
  const history = useHistory();
  setTimeout(() => {
    history.push('/')
  }, 2000);
  
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
