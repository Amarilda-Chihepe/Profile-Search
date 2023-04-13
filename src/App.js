import "./Assets/CSS/App.css";
import React, { useState } from 'react';
import Form from './Components/Form';
import Profiles from "./Components/Profiles";
import {list} from "./Components/List";
import Person from "./Components/Person";

function App() {



  return (
    <div className="container">
     
      <div className="app">
          <Profiles/>
      {/*}
        <div className="form">
          <Form/>
        </div>
        <div className="body">
          <Profiles/>
        </div>*/}
      </div>
      
    </div>
  )
};

export default App;
