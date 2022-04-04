import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Location, Origin, Result, RootObject } from "./CharacterTypes";

const api = `https://rickandmortyapi.com/api/character`;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchCharacters: builder.query<RootObject, number | void>({
        query(page = 1) {
          return `?page=${page}`;
        },
      }),
    };
  },
});

export const { useFetchCharactersQuery } = apiSlice;
