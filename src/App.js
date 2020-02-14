import React, {useState} from 'react';
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

  const handleLogout=()=>{
    if(loginVerified){
      return <button id="logout" onClick={()=>setLoginVerified(false)} >Logout</button>
    }
    else return;
  };


  return (
    <main className="App-main" >
      <header className="App-header" >
        <h3>Derpy Doodles Banner</h3> { handleLogout() }
        
      </header>
        { verifyLogin() }
    </main>
  );
}

export default App;
