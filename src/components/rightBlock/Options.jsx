import React, { useState } from 'react'
import { SpeedDial, SpeedDialAction } from '@material-ui/lab';
import { Add, Restore, Save, ThumbUp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
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
const actions = [
  { icon: <Save />, name: 'Save' },
  { icon: <Restore />, name: 'Restore' },
  { icon: <ThumbUp />, name: 'Like' }
];

export default function Options() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const ToggleOpenCloseHandler = (event) => {
    setOpen(!open);
  }

  return (
    <div className={classes.wrapper}>
      <SpeedDial
        ariaLabel="SpeedDial"
        className={classes.speedDial}
        icon={<Add />}
        onClose={ToggleOpenCloseHandler}
        onOpen={ToggleOpenCloseHandler}
        open={open}
        direction="up"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            // onClick={CloseHandler}
          />
        ))}
      </SpeedDial>
    </div>
  )
}
