import './App.css';
import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {auth} from "./firebase"

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
        auth.onAuthStateChanged(User => {
          setUser(User);
        })
  },[])
  
  return (
    <div className="App">
      {/* <h1>Lets Build the Whatsapp Clone</h1> */}
      {!user? (
        <Login />
      ) : (
        <div className="app__body">
          <BrowserRouter>
            {/* sidebar */}
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId"> 
                  {/* chat */}
                  <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
                
            </Switch>
          </BrowserRouter>
          </div>
      )}
      
    </div>

  );
}

export default App;
