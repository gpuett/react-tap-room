import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import TapList from './TapList';
import Header from './Header';
// import background from './../assets/images/blood-moon.jpg';

function App(){
  return (
    <div>
      <style global jsx>
        {`
          body {
            background-image: url(./../assets/images/blood-moon.jpg);
            background-color: black;
            color: white;

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
