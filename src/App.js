import { theme } from './color';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import { UserContext } from './context/user';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import User from './models/user';

function App() {
  const InitialUser = new User('',20,0,50000);

  return (
    <BrowserRouter>
      <div style={{
        backgroundColor: theme.palette.primary.dark,
        padding: '10px',
        margin: '10px 10px'
      }}>
        <Switch>
          <UserContext.Provider value={InitialUser}>
            <Route exact path='/' render={() => <AuthPage />} />
            <Route path='/main' render={() => <MainPage />} />
          </UserContext.Provider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
