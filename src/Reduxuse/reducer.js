

const initialState={
    arr:[]
};

function listreducer(state=initialState,action)
{
    if(action.type=='addtask')
    {
        return {...state,arr:[...state.arr,{title:action.payload.title,status:action.payload.status}]}
    }
    else if(action.type=='updatestatus')
    {
        return {...state,arr:state.arr.map((a)=>{if(a.title!=action.payload){return a} else if(a.status=='completed'){alert('Already completed'); return a} else{ return{...a,status:'completed'}}})}
    }
    else if(action.type=='deletetask')
    {
        return {...state,arr:state.arr.filter((a)=>a.title!=action.payload)};
    }
    else if(action.type=='clearall')
    {
        return {...state,arr:[]};
    }
    else
    {
        return state;
    }
}

export default listreducer;