import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:3000/',
        prepareHeaders:(headers)=>
        {
            const saved =localStorage.getItem("data") || "{}";
            const token= JSON.parse(saved);
            
            if(token)
            {
                headers.set('authorization',`${token.token}`);
            }
        }
    }),
    endpoints: (build)=>({
        fetchUsers: build.query({
            query:()=>("api/users/")
        }),
        addUsers: build.mutation({
            query:(user)=>({
            url:'api/register/', 
            method:'POST',
            body:user
            })
        }),
        loginUser:build.mutation({
            query:(user)=>({
                url:'api/login/',
                method:'POST',
                body:user
            })
        }),
        editUser: build.mutation({
            query:(user)=>({
                url:`api/user/${user._id}`,
                method:'PUT',
                body:user
            }),
        }),
        deleteuser: build.mutation({
            query:(id)=>({
                url:`api/user/${id}`,
                method:"DELETE"
            })
        })
    })
});

export const {useFetchUsersQuery,useAddUsersMutation,useLoginUserMutation,useEditUserMutation,useDeleteuserMutation} =api;
export default api;