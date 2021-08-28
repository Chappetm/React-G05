import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Nav from './components/Nav';
import Container from './components/Container';
import Footer from './components/Footer';
import Detail from './components/Detail';
import { Route } from 'react-router';


function App() {

  const[cripto, setCripto] = useState([]);

  const call = () => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((res) => {
     setCripto(res.data) 
    })
  }


  //[c, c, c, c, c]

  return (

    //Nav = rojo
    //Container = azul
    //Footer = verde
    
    <div>
      <Route path='/'> {/*Opcion 1*/}
        <Nav />
      </Route>
      <Route exact path='/' render={() => <Container call={call} cripto={cripto} />} /> {/*Opcion 1 con props*/}
      <Route path='/detail/:id' component={Detail} />
      <Route path='/' component={Footer} /> {/*Opcion 2*/}
    </div>
  );
}

export default App;