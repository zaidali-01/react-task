import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl:'https://pokeapi.co/api/v2/'}),
    endpoints: (build)=>({
        fetchUsers: build.query({
            query: ()=> 'pokemon'
        })
    })
});

export const {useFetchUsersQuery} =api;
export default api;