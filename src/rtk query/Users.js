import { useNavigate } from "react-router-dom";
import { useFetchUsersQuery,useEditUserMutation,useDeleteuserMutation } from "./Datafetch.js";
import { useEffect, useState } from "react";

function User(props)
{
    const [editUsers,{isLoading,isSuccess}]=useEditUserMutation();
    const [deleteUser,{isLoading:isload,isSuccess:issucces}]=useDeleteuserMutation();
    const [ed,seted]=useState(props.edi);
    const [c,setc]=useState(-1);
    const [d,setd]=useState(-1);
    const navigate=useNavigate();

    useEffect(()=>{isSuccess && (seted(ed.map((i,j)=>(j===c ? {...i,flag:true} : {...i}))) || props.fun())},[isSuccess]);
    useEffect(()=>{issucces && props.fun()},[issucces]);
    useEffect(()=>seted(props.edi),[props.edi]);

    if(isLoading)
        return <p>loading...</p>;
    if(isload)
        return <p>loading...</p>;

    const handle = async (user)=>
    {
        try{
            await editUsers(user);
            alert('Edited');
        }
        catch(error){
            alert('error');
        }
    }

    const dlt = async (id)=>
    {
        try{
            await deleteUser(id);
            alert('Deleted');
        }
        catch{
            alert('error');
        }
    }

    return (
        <>
        <h1>Users</h1>
        {console.log(ed)}
        {console.log(props.user)}
        {props.user.map((a,b)=>(ed[b].flag ? <p>name:{a.name}<br></br>email:{a.email}<br></br><button onClick={()=>seted(ed.map((i,j)=>(j===b ? {...i,flag:false,n:props.user[b].name,e:props.user[b].email} : {...i})))}>Edit</button><button onClick={()=>{dlt(props.user[b]._id); setd(b)}}>Delete</button></p> : <form><label>name:<br></br><input type="text" value={ed[b].n} onChange={(f)=>seted(ed.map((i,j)=>(j===b ? {...i,n:f.target.value} : {...i})))} /></label><br></br><label>email:<br></br><input type="text" value={ed[b].e} onChange={(f)=>seted(ed.map((i,j)=>(j===b ? {...i,e:f.target.value} : {...i})))} /></label><br></br><button onClick={()=>{handle({_id:props.user[b]._id,name:ed[b].n,email:ed[b].e}); setc(b)}}>Edit</button><br></br></form>))}
        <br></br>
        <button onClick={()=>navigate(-1)}>go back</button>
        </>
    );
}

function Edit(props)
{
    let edit=[];
    (function setit()
    {
        edit=props.users.map(()=>({flag:true,n:"",e:""}));
    })();

    return (
        <>
        <User user={props.users} edi={edit} fun={props.fun} />
        </>

    );
}

function Users()
{
    const {data,isLoading,refetch} = useFetchUsersQuery();
    

    if(isLoading)
        return <p>loading...</p>;

    return(
        <>
        <Edit users={data.users} fun={refetch} />
        </>
    );
}

export default Users;