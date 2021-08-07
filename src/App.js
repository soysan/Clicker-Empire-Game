import { Grid } from '@material-ui/core';
import LeftBlock from './components/leftBlock/LeftBlock';
import Status from './components/rightBlock/rightUp/Status';
import { blue } from '@material-ui/core/colors'
function App() {
  return (
    <div style={{ backgroundColor: blue[700] }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <LeftBlock />
        </Grid>
        <Grid item xs={6}>
          <Status />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
