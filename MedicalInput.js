import {useContext, useRef, useState} from 'react';
import styles from './MedicalInput.module.css';
import Context from './Store/Context';

const MedicalInput = ({collectdata})=>{
    let ctx = useContext(Context);
     let medicinename = useRef();
     let medicinedescription = useRef();
     let medicineprice = useRef();
     let medicinequantity = useRef();

    function submitHandler(e){
    e.preventDefault();

     let data = {name : medicinename.current.value,
         description : medicinedescription.current.value,
          price: medicineprice.current.value, 
          quantity : medicinequantity.current.value,
        id:Math.random(),value:0};
     
        ctx.collectdata(data);
    medicinename.current.value=''; medicinedescription.current.value='';medicineprice.current.value=''; medicinequantity.current.value='';
    }

   return <>
   <form onSubmit={submitHandler} className={styles.header}>
      <div>
        <label htmlFor="one">Medicine Name</label>
        <input ref={medicinename} type="text" id="one"/>
      </div>

      <div>
        <label htmlFor="two">Medicine Description</label>
        <input ref={medicinedescription} type="text" id="two"/>
      </div>

      <div>
        <label htmlFor="three">Price</label>
        <input ref={medicineprice} type="number" />
      </div>

      <div>
        <label htmlFor="four">Quantity</label>
        <input ref={medicinequantity} type="text" id="four"/>
      </div>
       <button>Add Item</button>
   </form>
   </>
}

export default MedicalInput;