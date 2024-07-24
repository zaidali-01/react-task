import React, { useState } from "react";
import styles from './App.module.css';
import Pictures from './Gallery/Pictures.js';
import Cards from './Product/Cards.js';
import Task from './To-Do List/Task.js';
import Valid from './Login/Valid.js';
import Theme from './Theme/Theme.js';
import User from './User/User.js';
import Stock from './Stock/Stock.js';
import Home from './Home/Home.js'

function App() 
{
    const [gal,setgal]=useState(false);
    const [card,setcard]=useState(false);
    const [task,settask]=useState(false);
    const [login,setlogin]=useState(false);
    const [theme,settheme]=useState(false);
    const [user,setuser]=useState(false);
    const [stock,setstock]=useState(false);
    const [home,sethome]=useState(true);

    const select=(a)=>
    {
        let arr=[];
        for(let i=0;i<8;i++)
        {
            if(a==i)
                arr[i]=true;
            else
            arr[i]=false;
        }
        sethome(arr[0]);
        setcard(arr[1]);
        settask(arr[2]);
        setgal(arr[3]);
        setlogin(arr[4]);
        settheme(arr[5]);
        setuser(arr[6]);
        setstock(arr[7]);
    }

    return (
        <>
        <div>
        <ul className={styles.verbs} style={{marginTop:"1%", overflow:"hidden", border:"1px solid #e7e7e7", backgroundColor:"#f3f3f3", textAlign:"center", alignItems:"center"}}>
        <li className={styles.nouns} onClick={()=>select(0)}>Home</li>
        <li className={styles.nouns} onClick={()=>select(1)}>Product Card</li>
        <li className={styles.nouns} onClick={()=>select(2)}>To-Do List</li>
        <li className={styles.nouns} onClick={()=>select(3)}>Gallery</li>
        <li className={styles.nouns} onClick={()=>select(4)}>Login</li>
        <li className={styles.nouns} onClick={()=>select(5)}>Theme Changer</li>
        <li className={styles.nouns} onClick={()=>select(6)}>User List</li>
        <li className={styles.nouns} onClick={()=>select(7)}>Stock Ticker</li>
        </ul>
        {home && <Home />}
        {gal && <Pictures />}
        {card && <Cards />}
        {task && <Task />}
        {login && <Valid />}
        {theme && <Theme />}
        {user && <User />}
        {stock && <Stock />}
        </div>
        </>
    );
};

export default App;