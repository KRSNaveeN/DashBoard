import { useContext, useEffect, useState } from 'react';
import classes from './MedicinesList.module.css';
import Context from './Store/Context';

const MedicinesList = () =>{
    
    
  const [lis,setList] = useState([]);
  let ctx = useContext(Context);

  useEffect(()=>setList(ctx.list),[ctx.list]);

     function quantitychangeHandler(id){
        let index = lis.findIndex((obj)=> obj.id == id)
        let updatedarr = [...lis];
       if(updatedarr[index].quantity > 0){
        updatedarr[index] = {...updatedarr[index], quantity : Number(updatedarr[index].quantity)-1, value:Number(updatedarr[index].value)+1};
        setList(updatedarr);
        ctx.update(updatedarr);
        ctx.cartdata((pre)=>pre+1);
        }
        }

    return<>
    <ul>
        {
            lis.map((eachitem)=>{
                return <ul key={Math.random()} className={classes.item}>
                    <li>{eachitem.name}</li>
                    <li>{eachitem.description}</li>
                    <li>{eachitem.price}</li>
                    <li>{eachitem.quantity > 0  ? eachitem.quantity : "Out of Stock" }</li>
                    <button onClick={()=>quantitychangeHandler(eachitem.id)}>Add to Cart</button>
                </ul>
            })
        }
    </ul>

    </>
}

export default MedicinesList;