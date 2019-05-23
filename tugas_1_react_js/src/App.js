import React, {Component} from 'react';
import MenuKontak from './page/MenuKontak'
import MenuProduct from './page/MenuProduct'
import MenuTentangKami from './page/MenuTentangKami'
import MenuUtama from './page/MenuUtama'

const Header = () => {
  return(
    <div>
    <h2>Ini Halaman Untuk Header</h2>
    </div>
  );
}

const Footer = () => {
  return(
    <div>
    <h2>Ini Halaman Untuk Footer </h2>
    </div>
  );
}

class App extends Component{
  render(){
    return(
      <div>
      <Header/>
      <MenuUtama/>
      <MenuProduct/>
      <MenuKontak/>
      <MenuTentangKami/>
      <Footer/>
      </div>
    );
  }
}

export default App;
