import React from "react";
import styles from './list.module.css';
import { useSelector } from "react-redux";


function Uncompleted(props)
{
    const st=useSelector((state)=>state.arr);
    return(
        <div style={{display:"flex", borderRadius:"5px", flexDirection:"column", backgroundColor:"#1c7c27",alignItems:"center"}}>
        <h2 style={{color:"#0b4612", marginTop:"5%", marginLeft:"3%"}}>The uncompleted tasks are:</h2>
        <ul className={styles.abc}>
            {st.map((ab)=> ab.status=="uncompleted" && <li className={styles.xyz}>{ab.title}</li>)}
        </ul>
        <button onClick={()=>props.func(true)} style={{padding:"5px", backgroundColor:"#0b4612", border:"1px solid #35ad43", borderRadius:"5px", marginLeft:"2%", marginBottom:"23%"}}>OK</button>
        </div>
    );
}

export default Uncompleted;