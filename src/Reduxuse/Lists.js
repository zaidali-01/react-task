import React, {useState} from 'react';
import styles from './list.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Adding from './Adding.js';
import Update from './Update.js';
import Delet from './Delet.js';
import Completed from './Completed.js';
import Uncompleted from './Uncompleted.js';

function Lists()
{
    const [add,setadd]=useState(true);
    const [updat,setupdat]=useState(true);
    const [comp,setcomp]=useState(true);
    const [uncomp,setuncomp]=useState(true);
    const [del,setdel]=useState(true);
    
const st=useSelector((state)=>state.arr);
const dispatch=useDispatch();

    return (
        <>
        <style>{'body { background-color: #3eaa3b; }'}</style>
        {add ?
        <>{del ?
        <>{updat ? 
        <>{comp ? 
        <>{uncomp ? <div style={{display:"flex", flexDirection:"column", backgroundColor:"#1c7c27", borderRadius:"5px", alignItems:"center"}}>
        <h1 style={{textAlign:"center", color:"#0b4612", marginTop:"5%", marginLeft:"1%"}}>My Tasks</h1>
        <ul className={styles.abc}>
            {st.map((t)=><li className={styles.xyz}>{t.title} is {t.status}</li>)}
        </ul>
        <button onClick={()=>setadd(false)} style={{padding:"5px", backgroundColor:"#0b4612",borderRadius:"10px", border:"1px solid #35ad43" }}>Add Task</button>
        <button onClick={()=>setdel(false)} style={{padding:"5px", backgroundColor:"#0b4612",borderRadius:"10px", border:"1px solid #35ad43" }}>Delete Task</button>
        <button onClick={()=>setupdat(false)} style={{padding:"5px", backgroundColor:"#0b4612",borderRadius:"10px", border:"1px solid #35ad43" }}>Update Status</button>
        <button onClick={()=>setcomp(false)} style={{padding:"5px", backgroundColor:"#0b4612",borderRadius:"10px", border:"1px solid #35ad43" }}>Completed Tasks</button>
        <button onClick={()=>setuncomp(false)} style={{padding:"5px", backgroundColor:"#0b4612",borderRadius:"10px", border:"1px solid #35ad43" }}>Uncompleted Tasks</button>
        <button onClick={()=>dispatch({type:'clearall'})} style={{padding:"5px", backgroundColor:"#0b4612",borderRadius:"10px", border:"1px solid #35ad43", marginBottom:"14%" }}>Clear All Tasks</button>
        </div> : <Uncompleted func={setuncomp} />}</> : <Completed func={setcomp} />}</> : <Update func={setupdat} />}</> : <Delet func={setdel} />}</> : <Adding func={setadd} />}
        </>
    );
}

export default Lists