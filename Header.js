import { useContext } from "react";
import Context from "./Store/Context";

const Header = ()=>{
  let ctx =  useContext(Context)
  console.log(ctx.value);
    return <>
    <header>
        <nav style={{display: "flex", justifyContent:"space-between", alignItems:'baseline'}}>
            <h1>Medicines Dash Board</h1>
            <button onClick={()=>ctx.setShowcart(true)}>Cart ({ctx.value})</button>
        </nav>
    </header>
    
    </>
}

export default Header;