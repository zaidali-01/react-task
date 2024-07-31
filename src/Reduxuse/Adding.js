import React,{useState} from "react";
import { useDispatch } from "react-redux";

function Adding(props)
{
    const [a,seta]=useState("");
    const [b,setb]=useState("");
    const dispatch=useDispatch();

    function addtask()
    {
        dispatch({type:'addtask',payload:{title:a,status:b}});
        props.func(true);
    }

    return (
        <div style={{display:"flex", flexDirection:"column", backgroundColor:"#1c7c27",alignItems:"center"}}>
        <h1 style={{color:"#0b4612", marginTop:"5%", marginLeft:"5%"}}>Adding New Task</h1>
        <form style={{marginLeft:"50px"}}>
            <label>Enter title:<br></br>
                <input type="text" value={a} onChange={(e)=>seta(e.target.value)} style={{padding:"2px", width:"calc(4em + 4vw)", marginBottom:"10px", textAllign:"center", border:"2px solid #35ad43", backgroundColor:"#0b4612"}} />
            </label><br></br>
            <label>Choose status:<br></br>
                <select value={b} onChange={(e)=>setb(e.target.value)} style={{padding:"2px", width:"calc(3.9rem + 3.9vw)", marginBottom:"10px", textAllign:"center", border:"2px solid #35ad43", backgroundColor:"#0b4612"}}>
                    <option>-Choose-</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </label><br></br>
            <button onClick={(e)=>addtask()} style={{padding:"calc(0.15rem + 0.15vw)", backgroundColor:"#0b4612", border:"1px solid #35ad43", borderRadius:"5px", marginLeft:"calc(1.4rem + 1.4vw)", marginBottom:"120%"}}>Add</button>
        </form>
        </div>
    );
}

export default Adding;