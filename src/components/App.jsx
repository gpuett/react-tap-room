import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import TapList from './TapList';
import Header from './Header';
import NewTapForm from './NewTapForm';

function App(){
  return (
    <div>
      <style global jsx>
        {`
          body {
            background-image: url('https://tinyurl.com/y7nqhtpk');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-color: black;
            color: white;
            align-items: center;
            margin: auto;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          }
        `}
      </style>
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={TapList} />
          <Route path="/newKeg" component={NewTapForm}/>
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
