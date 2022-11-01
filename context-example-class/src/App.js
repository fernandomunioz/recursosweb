import logo from './logo.svg';
import './App.css';

import {AuthProvider} from './contexts/AuthProvider'
import UserInfo from './components/UserInfo';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <UserInfo />
      </AuthProvider>

    </div>
  );
}

export default App;
