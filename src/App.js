// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import TextBox from './Components/TextBox';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Number from './Components/Number';
import React, { useState } from 'react'



function App() {
  const [mode, setMode] = useState("light")
  const toggleMode =()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor="#241e1e" 
      document.body.style.color="white"      
      console.log("dark Mode activated")

      
    }else{
      setMode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"        
      console.log("light Mode activated")
      

    }

  }
  return (
   <Router>
      <NavBar  mode={mode} toggleMode={toggleMode}/>
        <Switch>
          <Route exact path="/">
            <TextBox mode={mode}/>
          </Route>
          <Route exact path="/number">
            <Number/>
          </Route>
        </Switch>
   
   </Router>
  );
}

export default App;
