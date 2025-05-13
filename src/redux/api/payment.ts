// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// import axios from 'axios';



// export const paymentAPI = createApi({
//     reducerPath: 'userAPI',
//     baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/payment` }),
//     endpoints: (builder) => ({
//         create: builder.mutation<MessageResponse, >({
//         query: (id, amount) => ({
//             url: `create?id=${id}`,
//             method: 'POST',
//             body: amount,
//         }),
//         }),
//         verify: builder.mutation({
//         query: ({ id, data }) => ({
//             url: `user/${id}`,
//             method: 'POST',
//             body: data,
//         }),
//         }),
//     }),
// });


// export const {useCreateMutation, useVerifyMutation} =paymentAPI

