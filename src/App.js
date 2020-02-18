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
        <Homepage logout={handleLogout} />
      );
    }else{
      return(
        <Login  setLoginVerified={setLoginVerified} />
      );
    }

  };

  // Broke it NEED TO FIX
  const handleLogout=()=>{
    if(loginVerified){
      return ()=>setLoginVerified(false);
      //return <button id="logout" onClick={()=>setLoginVerified(false)} >Logout</button>
    }
    else return;
  };


  return (
    <main className="App-main" >
      <div className="App-container" >
        <header className="App-header" >
          <h3>Derpy Doodles Banner</h3>
          
        </header>
          { verifyLogin() }
      </div>
    </main>
  );
}

export default App;
