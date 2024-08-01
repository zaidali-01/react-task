import { createSlice } from "@reduxjs/toolkit";

const initialState={
    arr:[]
};

const slice=createSlice({
    name:"lists",
    initialState,
    reducers:{
        addtask:(state,action)=>
        {
            state.arr.push({title:action.payload.title,status:action.payload.status});
        },
        updatestatus:(state,action)=>
        {
            let y=-1;
            for(let i=0;i<state.arr.length;i++)
            {
                if(state.arr[i].title===action.payload)
                {
                    y=i;
                    break;
                }
            }
            if(y==-1)
            {
                alert('task doesn\'t exist');
            }
            else if(state.arr[y].status=='completed')
            {
                alert('task already completed');
            }else
            {
                state.arr[y].status='completed';
            }
        },
        deletetask:(state,action)=>
        {
            state.arr=state.arr.filter((o)=>o.title!=action.payload);
        },
        clearall:(state)=>
        {
            state.arr=[];
        }
    }
});

export const {addtask, updatestatus, deletetask, clearall}=slice.actions;
export default slice.reducer;