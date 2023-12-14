import { useContext, useEffect, useState } from "react";
import Context from "./Store/Context";
import Card from "./UI/Card";
import styles from './Modal.module.css';
const Modal = ()=>{

    let [cartvalues, setcartValues] = useState([]);
    let ctx = useContext(Context);
    useEffect(()=>{
        setcartValues(ctx.list);
    },[ctx.list]);

    function subHandler(id){
    let index = cartvalues.findIndex((eachitem)=> eachitem.id == id)
    let newarray = [...cartvalues];
    if(newarray[index].value>0){
    newarray[index] = { ...newarray[index], quantity : Number(newarray[index].quantity)+1, value: Number(newarray[index].value)-1};
     setcartValues(newarray);
     ctx.update(newarray);
     ctx.cartdata((pre)=> pre-1);}}

    return <>
        <div className={styles.backdrop} onClick={()=>{ctx.setShowcart(false)}} />
        <Card>
       {cartvalues.map((each)=>{
         return( each.value > 0 && <div key={each.id} className={styles.item}>
            <div>
            <h3>{each.name}</h3>  
            <h3>${each.price}</h3> 
            </div>
              
              <div>
               <h3> x{each.value}</h3>
               <button onClick={()=>subHandler(each.id)}>-</button>
              </div>
             </div>)
       })}
       <button onClick={()=>ctx.setShowcart(false)}>Close Cart</button>
       </Card>
    </>
}
export default Modal;