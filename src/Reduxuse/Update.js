import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { updatestatus } from "./reducer.js";

function Update(props)
{
    const [z,setz]=useState("");
    const dispatch=useDispatch();

    function update()
    {
        dispatch(updatestatus(z));
        props.func(true);
    }

    return(
        <div style={{display:"flex", borderRadius:"5px", flexDirection:"column", backgroundColor:"#1c7c27",alignItems:"center"}}>
        <h1 style={{color:"#0b4612", marginTop:"5%"}}>Updating Task Status</h1>
        <form>
        <label>Enter title:<br></br>
                <input type="text" value={z} onChange={(e)=>setz(e.target.value)} style={{padding:"2px", width:"calc(4em + 4vw)", marginBottom:"10px", textAllign:"center", border:"2px solid #35ad43", backgroundColor:"#0b4612"}} />
            </label><br></br>
            <button onClick={(e)=>update()} style={{padding:"5px", backgroundColor:"#0b4612", border:"1px solid #35ad43", borderRadius:"5px", marginLeft:"calc(1.1em + 1.1vw)", marginBottom:"120%"}}>Update</button>
        </form>
        </div>
    );
}

export default Update;
