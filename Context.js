import React from 'react';
import { useState } from 'react';
let Context = React.createContext({inputdata:[], setinputData : ()=>{},cartData:0,setcartData : ()=>{},showcart:false, setShowcart:()=>{}});
export default Context;

export let Auth = (props)=>{
    let [inputdata,setinputData] =  useState([]);
    let [cartData, setcartData] = useState(0);
    let [showcart ,setShowcart] = useState(false);
  
    function collectInputdata(data){
        setinputData((pre)=>[...pre, data]);
    }
   let len = inputdata.length;
    return <Context.Provider value={{value:cartData, setShowcart : setShowcart,
     collectdata:collectInputdata, 
     list : inputdata, update:setinputData, 
     cartdata:setcartData, len :len, showcart : showcart}}>
        {props.children}
    </Context.Provider>
}