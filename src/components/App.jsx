import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import TapList from './TapList';
import Header from './Header';
import Moon from './../assets/images/blood-moon.jpg';

function App(){
  return (
    <div>
      <style global jsx>
        {`
          body {
            background-image: url('https://i.imgur.com/8FrbFiR.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-color: black;
            color: white;
            align-items: center;
            margin: auto;
            width: 50%;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
