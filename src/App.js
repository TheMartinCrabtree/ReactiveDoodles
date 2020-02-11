import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Homepage from './Homepage';
import Login from './Login';

function App() {
  // Basic login for now
  const [loginVerified, setLoginVerified] = useState(false);

  const verifyLogin=()=>{
    if(loginVerified){
      return(
        <Homepage />
      );
    }else{
      return(
        <Login  setLoginVerified={setLoginVerified} />
      );
    }

  };


  return (
    <div >
      <header >
        <h3>Derpy Doodles</h3>
        { verifyLogin }
        
      </header>
    </div>
  );
}

export default App;
