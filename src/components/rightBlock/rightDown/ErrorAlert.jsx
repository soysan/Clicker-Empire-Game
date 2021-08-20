import { DialogTitle } from '@material-ui/core'
import React from 'react'

export default function ErrorAlert(props) {
  return (
    <>
      <DialogTitle>{ props.message }</DialogTitle>
      </>
  )
}
