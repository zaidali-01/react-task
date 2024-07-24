import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './Task.module.css';

function Task()
{
    const [arra,setarra]=useState([]);
    const [add,setadd]=useState(true);
    const [updat,setupdat]=useState(true);
    const [comp,setcomp]=useState(true);
    const [uncomp,setuncomp]=useState(true);
    
    function addtask(a,b)
    {
        setarra((prevarra)=>[...prevarra,{title:a, status:b}]);
        setadd(true);
    }

function Adding()
{
    const [a,seta]=useState("");
    const [b,setb]=useState("");

    
    return (
        <>
        <form style={{marginLeft:"50px"}}>
            <label>Enter title:<br></br>
                <input type="text" value={a} onChange={(e)=>seta(e.target.value)} style={{padding:"2px", width:"7.5%", marginBottom:"10px", textAllign:"center", borderColor:"gray", color:"gray"}} />
            </label><br></br>
            <label>Choose status:<br></br>
                <select value={b} onChange={(e)=>setb(e.target.value)} style={{padding:"2px", marginBottom:"10px", textAllign:"center", borderColor:"gray", color:"gray"}}>
                    <option>-Choose-</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </label><br></br>
            <button onClick={()=>addtask(a,b)} style={{padding:"5px", backgroundColor:"gray"}}>Add</button>
        </form>
        </>
    );
}

function update(z)
{
    let c = new Map();
    arra.map((obj) => {
    c.set(obj.title, obj.status);});
    let d=c.get(z);
    if(!c.has(z))
    {
        alert("No task with such name exists!");
    }
    else if(d=="completed")
    {
        alert("task already completed!");
    }
    else
    {
        
        setarra(()=>arra.map((a)=>a.title===z ? {...a,status:"completed"} : {...a}));
        alert("Updated!");
    }
    setupdat(true);
}

function Update()
{

    const [z,setz]=useState("");

    return(
        <>
        <form>
        <label>Enter title:<br></br>
                <input type="text" value={z} onChange={(e)=>setz(e.target.value)} style={{padding:"2px", width:"7.5%", marginBottom:"10px", textAllign:"center", borderColor:"gray", color:"gray"}} />
            </label><br></br>
            <button onClick={()=>update(z)} style={{padding:"5px", backgroundColor:"gray"}}>Update Status</button>
        </form>
        </>
    );
}


function Completed()
{
    return(
        <>
        <h3>The completed tasks are:</h3>
        <ul className={styles.abc}>
            {arra.map((ab)=> ab.status=="completed" && <li className={styles.xyz}>{ab.title}</li>)}
        </ul>
        <button onClick={()=>setcomp(true)} style={{padding:"5px", backgroundColor:"gray"}}>OK</button>
        </>
    );
}


function Uncompleted()
{
    return(
        <>
        <h3>The uncompleted tasks are:</h3>
        <ul className={styles.abc}>
            {arra.map((ab)=> ab.status=="uncompleted" && <li className={styles.xyz}>{ab.title}</li>)}
        </ul>
        <button onClick={()=>setuncomp(true)} style={{padding:"5px", backgroundColor:"gray"}}>OK</button>
        </>
    );
}

    return(
        <>
        {add ?
        <>{updat ? 
        <>{comp ? 
        <>{uncomp ? <div>
        <h1>My Tasks</h1>
        <ul className={styles.abc}>
            {arra.map((t)=><li className={styles.xyz}>{t.title} is {t.status}</li>)}
        </ul>
        <button onClick={()=>setadd(false)} style={{padding:"5px", backgroundColor:"gray",borderRadius:"10px", marginRight:"2px" }}>Add Task</button>
        <button onClick={()=>setupdat(false)} style={{padding:"5px", backgroundColor:"gray",borderRadius:"10px", marginRight:"2px" }}>Update Status</button>
        <button onClick={()=>setcomp(false)} style={{padding:"5px", backgroundColor:"gray",borderRadius:"10px", marginRight:"2px" }}>Completed Tasks</button>
        <button onClick={()=>setuncomp(false)} style={{padding:"5px", backgroundColor:"gray",borderRadius:"10px", marginRight:"2px" }}>Uncompleted Tasks</button>
        </div> : <Uncompleted />}</> : <Completed />}</> : <Update />}</> : <Adding />}
        </>
    );
}

export default Task