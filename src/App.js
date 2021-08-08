import { Grid } from '@material-ui/core';
import LeftBlock from './components/leftBlock/LeftBlock';
import RightBlock from './components/rightBlock/RightBlock';
import { blue } from '@material-ui/core/colors'
function App() {
  return (
    <div style={{
      backgroundColor: blue[700],
      margin: 30,
      padding: 20
    }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <LeftBlock />
        </Grid>
        <Grid item xs={6}>
          <RightBlock />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
