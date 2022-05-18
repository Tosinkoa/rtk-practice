import axiosBaseQuery from "../axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

const pokemonApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: "https://pixabay.com/",
  }),
  endpoints(build) {
    return {
      getPokemon: build.query({
        query: () => ({
          url: "/api/?key=24906737-e779d7650b85ce968ac3f7b79&q=yellow+flowers&image_type=photo",
          method: "get",
        }),
      }),
      postPokemon: build.mutation({
        query: () => ({ url: "/mutation", method: "post" }),
      }),
    };
  },
});

export const { useGetPokemonQuery } = pokemonApi;
