import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import TapList from './TapList';
import Header from './Header';

function App(){
  return (
    <div>
      <style global jsx>
        {`
          body {
            background-image: url(./../assets/images/blood-moon.jpg);
            background-color: black;
            color: white;
            align-items: center;
            margin: auto;
            width: 50%;
          }
        `}
      </style>
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={TapList} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
