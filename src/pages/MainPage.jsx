import React, { useContext } from 'react'
import { Grid } from '@material-ui/core';
import LeftBlock from '../components/leftBlock/LeftBlock';
import RightBlock from '../components/rightBlock/RightBlock';
import Dials from '../components/rightBlock/dial/Dials';
import { UserContext } from '../context/user';

export default function MainPage() {
  const user = useContext(UserContext);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <LeftBlock param={user} />
        </Grid>
        <Grid item xs={6}>
          <RightBlock />
        </Grid>
      </Grid>
      <Dials />
    </div>
  )
}
