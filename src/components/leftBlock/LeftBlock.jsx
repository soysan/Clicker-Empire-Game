import React, {useContext, useReducer} from 'react';
import Adb from '@material-ui/icons/Adb';
import Counter from './Counter';
import Grid from '@material-ui/core/Grid'
import { green } from '@material-ui/core/colors';
import { UserContext } from '../../App';
import { Reducer } from '../../reducer/Reducer';

export default function LeftBlock() {
  const user = useContext(UserContext);
  const [userState, dispatch] = useReducer(Reducer, user);

  const addCount = () => {
    dispatch({ type: 'INCREASE', state: user });
    user.count = user.count + 1;
    user.money += userState.addPerClick;
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Counter userData={userState}/>
      <Adb
        style={{ color: green[400], fontSize: 100 }}
        onClick={addCount}
      />
    </Grid>
  )
}
