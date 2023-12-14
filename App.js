
import { useContext, useState } from 'react';
import './App.css';
import MedicalInput from './Components/MedicalInput';
import MedicinesList from './Components/MedicinesList';
import Header from './Components/Header';
import Modal from './Components/Modal'
import Context from './Components/Store/Context';

function App() {
let ctx =   useContext(Context)
return (
    <div className="App">
       <Header/>
       <MedicalInput />
        { ctx.len>0 ? <MedicinesList /> : (<h2> Empty ...Add Products</h2>)}
        { ctx.showcart && <Modal  />}
    </div>
  );
}

export default App;
