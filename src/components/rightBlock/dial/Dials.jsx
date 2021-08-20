import React, { useContext, useState } from 'react'
import { SpeedDial, SpeedDialAction } from '@material-ui/lab';
import { Add, Restore, Save, ThumbUp } from '@material-ui/icons';
import { Dialog, makeStyles } from '@material-ui/core';
import { UserContext, UserState } from '../../../context/user';
import SaveOption from './SaveOption';
import { decycle } from 'json-cyclic';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    marginTop: theme.spacing(1),
  },
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    }
  }
}));

export default function Dials() {
  console.log('dial open')
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [saveOpen, setSaveOpen] = useState(false);
  const user = useContext(UserContext);

  const OpenOptionHandler = (event, operation) => {
    event.stopPropagation();
    if (operation === 'SAVE') {
      ToggleSaveHandler();
      localStorage.setItem(UserState, JSON.stringify(decycle(user)))
    } else if (operation === 'RESET') {
      alert('reset')
    } else if (operation === 'LIKE') {
      window.open('https://twitter.com/soylove2');
    }
  }

  const ToggleSaveHandler = () => {
    setSaveOpen(!saveOpen);
  }

  const actions = [
    { icon: <Save />, name: 'Save', action: OpenOptionHandler, operation: 'SAVE' },
    { icon: <Restore />, name: 'Restore', action: OpenOptionHandler, operation: 'RESET' },
    { icon: <ThumbUp />, name: 'Like', action: OpenOptionHandler, operation: 'LIKE' }
  ];

  const ToggleDialOpenCloseHandler = () => {
    setOpen(!open);
  }

  return (
    <div className={classes.wrapper}>
      <Dialog
        open={saveOpen}
        onClose={ToggleSaveHandler}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <SaveOption />
      </Dialog>
      <SpeedDial
        ariaLabel="SpeedDial"
        className={classes.speedDial}
        icon={<Add />}
        onClose={ToggleDialOpenCloseHandler}
        onOpen={ToggleDialOpenCloseHandler}
        open={open}
        direction="up"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={(event) => OpenOptionHandler(event, action.operation)}
          />
        ))}
      </SpeedDial>
    </div>
  )
}
