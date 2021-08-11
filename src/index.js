import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const InitialState = {
  userName: 'Cheater',
  password: 'Cheater',
}
export const AuthContext = createContext(InitialState);

ReactDOM.render(
  <React.StrictMode>
    <AuthContext.Provider value={{AuthContext}}>
      <App />
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
