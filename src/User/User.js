import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './user.module.css';

const url="https://jsonplaceholder.typicode.com/users";

function abc(a,b)
{
    if(a.includes(b))
        return true;
    if(a.toUpperCase().includes(b.toUpperCase()))
        return true;
    return false;
}

function User()
{
    const [user,setuser]=useState([]);
    const [arr,setarr]=useState("");
    useEffect(()=>{axios.get(url).then((response)=>{setuser(response.data)})},[]);


    return (
        <>
        <h1>User List Search:</h1>
        <form>
            <label>Search username:<br></br>
                <input type="text" value={arr} onChange={(e)=>setarr(e.target.value)}></input>
            </label>
        </form><br></br><br></br>
        <table>
            <tr>
                <th>id</th>
                <th>username</th>
                <th>fullname</th>
                <th>email</th>
            </tr>
        {user.map((a)=>(abc(a.username,arr) && <tr><td>{a.id}</td> <td>{a.username}</td> <td>{a.name}</td> <td>{a.email}</td></tr>))}
        </table>
        </>
    );
}

export default User;