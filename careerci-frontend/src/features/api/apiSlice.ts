import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import type { Post } from '@/features/posts/postsSlice'
// export type { Post }

import type { Certification } from "../../types/types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}` }),
  tagTypes:['Certifications'],
  endpoints: (builder) => ({
    getCertifications: builder.query<Certification[], string>({
      query: (userId) => `/certifications/${userId}`,
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetCertificationsQuery } = apiSlice;
