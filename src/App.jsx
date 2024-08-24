import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SelectBeast from './SelectBeast'
import data from './data.json';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  
  const [displayModal, setDisplayModal] = useState (false);
  const [selectedBeast, setSelectedBeast] = useState ({});

  function mostrarModal(name) {
    const beastWithName = data.find(beast => beast.title === name ) 

    setSelectedBeast (beastWithName);
    setDisplayModal(true);
    
  }
  function handleClose(){
    setDisplayModal(false);
  }
  
  console.log (selectedBeast);

    return (
      <>
        <Header/>
        <Gallery mostrarModal={mostrarModal} allbeast={data}/>
        <SelectBeast selectedBeast={selectedBeast} show = {displayModal} handleClose = {handleClose}/>
        <Footer/>
      </>
    );
  }

export default App;