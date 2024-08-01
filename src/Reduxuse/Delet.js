import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { deletetask } from "./reducer.js";

function Delet(props)
{
    const [y,sety]=useState("");
    const dispatch=useDispatch();

    function dlt()
    {
        dispatch(deletetask(y));
        props.func(true);
    }

    return (
        <div style={{display:"flex", borderRadius:"5px", flexDirection:"column", backgroundColor:"#1c7c27",alignItems:"center"}}>
        <h1 style={{color:"#0b4612", marginTop:"5%"}}>Deleting Task</h1>
        <form>
        <label>Enter title:<br></br>
                <input type="text" value={y} onChange={(e)=>sety(e.target.value)} style={{padding:"2px", width:"calc(4em + 4vw)", marginBottom:"10px", textAllign:"center", border:"2px solid #35ad43", backgroundColor:"#0b4612"}} />
        </label><br></br>
        <button onClick={(e)=>dlt()} style={{padding:"5px", backgroundColor:"#0b4612", border:"1px solid #35ad43", borderRadius:"5px", marginLeft:"calc(1.2em + 1.2vw)", marginBottom:"120%"}}>Delete</button>
        </form>
        </div>
    );
}

export default Delet;