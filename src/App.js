import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Conversor from './components/Conversor';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>Conversor de Moedas</h1>
        <div className="linha">
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="USD"></Conversor>
        </div>
        <div className="linha">
          <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
        </div>
        <div className="linha">
          <Conversor moedaA="CNY" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="CNY"></Conversor>
        </div>
        <div className="linha">
          <Conversor moedaA="EURO" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="EURO"></Conversor>
        </div>
        <div className="linha">
          <Conversor moedaA="GBP" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="GBP"></Conversor>
        </div>
        
      </div>  
    );
  }
}  

export default App;
