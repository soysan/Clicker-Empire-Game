import { blue } from '@material-ui/core/colors'
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import { useContext } from 'react';
import { AuthContext } from './index';

function App() {
  // const { user } = useContext(AuthContext);

  return (
    <div style={{
      backgroundColor: blue[700],
      margin: 30,
      padding: 20
    }}>
      <AuthPage />
      <MainPage />
    </div>
  );
}

export default App;
