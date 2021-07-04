import React from 'react';
import logo from './logo.svg';
import './App.css';
import Master from './components/Master/master';
import { BrowserRouter } from 'react-router-dom';
import AppRouting from './AppRouting';
import { Provider } from 'react-redux';
import store from './redux/store-configuration';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
         <Master>    {/* it include Header , footer , sidebar */}
           <AppRouting/> {/*  it include children component  */}
        </Master>
      </BrowserRouter>
     </div>
     </Provider>
  );
}

export default App;
