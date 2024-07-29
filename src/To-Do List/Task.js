import React, { useEffect, useState } from 'react';
import styles from './Task.module.css';

function Task()
{
    const [arra,setarra]=useState(()=>{const saved=localStorage.getItem("arra"); return (JSON.parse(saved) || []);});
    const [add,setadd]=useState(true);
    const [updat,setupdat]=useState(true);
    const [comp,setcomp]=useState(true);
    const [uncomp,setuncomp]=useState(true);
    const [del,setdel]=useState(true);
    
    useEffect(()=>{localStorage.removeItem("arra"); localStorage.setItem("arra",JSON.stringify(arra))},[arra]);

    function addtask(a,b)
    {
        setarra((prevarra)=>[...prevarra,{title:a, status:b}]);
        setadd(true);
    }

function Adding()
{
    const [a,seta]=useState("");
    const [b,setb]=useState("");

    useEffect(()=>{localStorage.setItem("b",JSON.stringify(b))},[b]);

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
            <button onClick={()=>addtask(a,b)} style={{padding:"calc(0.15rem + 0.15vw)", backgroundColor:"#0b4612", border:"1px solid #35ad43", borderRadius:"5px", marginLeft:"calc(1.4rem + 1.4vw)", marginBottom:"120%"}}>Add</button>
        </form>
        </div>
    );
}

function dlt(y)
{
    let c = new Map();
    arra.map((obj) => {
    c.set(obj.title, obj.status);});
    let d=c.get(y);
    if(!c.has(y))
    {
        alert("No task with such name exists!");
    }
    else
    {
        const newarr=arra.filter((a)=>a.title!=y);
        setarra(newarr);
    }
    setdel(true);
}

function Delet()
{
    const [y,sety]=useState("");
    return (
        <div style={{display:"flex", borderRadius:"5px", flexDirection:"column", backgroundColor:"#1c7c27",alignItems:"center"}}>
        <h1 style={{color:"#0b4612", marginTop:"5%"}}>Deleting Task</h1>
        <form>
        <label>Enter title:<br></br>
                <input type="text" value={y} onChange={(e)=>sety(e.target.value)} style={{padding:"2px", width:"calc(4em + 4vw)", marginBottom:"10px", textAllign:"center", border:"2px solid #35ad43", backgroundColor:"#0b4612"}} />
        </label><br></br>
        <button onClick={()=>dlt(y)} style={{padding:"5px", backgroundColor:"#0b4612", border:"1px solid #35ad43", borderRadius:"5px", marginLeft:"calc(1.2em + 1.2vw)", marginBottom:"120%"}}>Delete</button>
        </form>
        </div>
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
        <div style={{display:"flex", borderRadius:"5px", flexDirection:"column", backgroundColor:"#1c7c27",alignItems:"center"}}>
        <h1 style={{color:"#0b4612", marginTop:"5%"}}>Updating Task Status</h1>
        <form>
        <label>Enter title:<br></br>
                <input type="text" value={z} onChange={(e)=>setz(e.target.value)} style={{padding:"2px", width:"calc(4em + 4vw)", marginBottom:"10px", textAllign:"center", border:"2px solid #35ad43", backgroundColor:"#0b4612"}} />
            </label><br></br>
            <button onClick={()=>update(z)} style={{padding:"5px", backgroundColor:"#0b4612", border:"1px solid #35ad43", borderRadius:"5px", marginLeft:"calc(1.1em + 1.1vw)", marginBottom:"120%"}}>Update</button>
        </form>
        </div>
    );
}


function Completed()
{
    return(
        <div style={{display:"flex", borderRadius:"5px", flexDirection:"column", backgroundColor:"#1c7c27",alignItems:"center"}}>
        <h2 style={{color:"#0b4612", marginTop:"5%", marginLeft:"1%"}}>The completed tasks are:</h2>
        <ul className={styles.abc}>
            {arra.map((ab)=> ab.status=="completed" && <li className={styles.xyz}>{ab.title}</li>)}
        </ul>
        <button onClick={()=>setcomp(true)} style={{padding:"5px", backgroundColor:"#0b4612", border:"1px solid #35ad43", borderRadius:"5px", marginLeft:"2%", marginBottom:"23%"}}>OK</button>
        </div>
    );
}


function Uncompleted()
{
    return(
        <div style={{display:"flex", borderRadius:"5px", flexDirection:"column", backgroundColor:"#1c7c27",alignItems:"center"}}>
        <h2 style={{color:"#0b4612", marginTop:"5%", marginLeft:"3%"}}>The uncompleted tasks are:</h2>
        <ul className={styles.abc}>
            {arra.map((ab)=> ab.status=="uncompleted" && <li className={styles.xyz}>{ab.title}</li>)}
        </ul>
        <button onClick={()=>setuncomp(true)} style={{padding:"5px", backgroundColor:"#0b4612", border:"1px solid #35ad43", borderRadius:"5px", marginLeft:"2%", marginBottom:"23%"}}>OK</button>
        </div>
    );
}

    return(
        <>
        <style>{'body { background-color: #3eaa3b; }'}</style>
        {add ?
        <>{del ?
        <>{updat ? 
        <>{comp ? 
        <>{uncomp ? <div style={{display:"flex", flexDirection:"column", backgroundColor:"#1c7c27", borderRadius:"5px", alignItems:"center"}}>
        <h1 style={{textAlign:"center", color:"#0b4612", marginTop:"5%", marginLeft:"1%"}}>My Tasks</h1>
        <ul className={styles.abc}>
            {arra.map((t)=><li className={styles.xyz}>{t.title} is {t.status}</li>)}
        </ul>
        <button onClick={()=>setadd(false)} style={{padding:"5px", backgroundColor:"#0b4612",borderRadius:"10px", border:"1px solid #35ad43" }}>Add Task</button>
        <button onClick={()=>setdel(false)} style={{padding:"5px", backgroundColor:"#0b4612",borderRadius:"10px", border:"1px solid #35ad43" }}>Delete Task</button>
        <button onClick={()=>setupdat(false)} style={{padding:"5px", backgroundColor:"#0b4612",borderRadius:"10px", border:"1px solid #35ad43" }}>Update Status</button>
        <button onClick={()=>setcomp(false)} style={{padding:"5px", backgroundColor:"#0b4612",borderRadius:"10px", border:"1px solid #35ad43" }}>Completed Tasks</button>
        <button onClick={()=>setuncomp(false)} style={{padding:"5px", backgroundColor:"#0b4612",borderRadius:"10px", border:"1px solid #35ad43" }}>Uncompleted Tasks</button>
        <button onClick={()=>setarra([])} style={{padding:"5px", backgroundColor:"#0b4612",borderRadius:"10px", border:"1px solid #35ad43", marginBottom:"17%" }}>Clear All Tasks</button>
        </div> : <Uncompleted />}</> : <Completed />}</> : <Update />}</> : <Delet />}</> : <Adding />}
        </>
    );
}

export default Task