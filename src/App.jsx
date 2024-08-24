import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css'

import data from './data.json';
import Header from './Header';
import Gallery from './Gallery';
import SelectBeast from './SelectBeast';
import Footer from './Footer';

function App() {
  const [displayModal, setDisplayModal] = useState (false);
  const [selectedBeast, setSelectedBeast] = useState ({});
  function mostrarModal(name) {
    const beastWithName = data.find(beast => beast.title===name);
    setSelectedBeast(beastWithName);
    setDisplayModal(true);
  }
  function handleClose(){
    setDisplayModal(false);
  }
  return (
    <>
    <div>
      <Header/>
      <Gallery mostrarModal={mostrarModal} allbeast={data}/>
      <SelectBeast selectedBeast={selectedBeast} show={displayModal} handleClose={handleClose} />
      <Footer/>
    </div>
    </>
  );
}
export default App;