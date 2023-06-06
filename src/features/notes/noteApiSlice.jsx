import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const notesAdapter = createEntityAdapter({});
const initialState = notesAdapter.getInitialState();

export const notesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => "/notes",

      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      keepUnusedDataFor: 5,
      transformResponse: (responseData) => {
        const loadedUser = responseData.map((user) => {
          user.id = user_id;
          return user;
        });
        return notesAdapter.setAll(initialState, loadedUser);
      },

      providesTags : (result, error, arg) => {
        if(result?.ids) {
            return [
                {type: "User", id: "LIST"},
                ...result.ids.map(id => ({type: "User", id}))
            ]

        }else return [{type: "User", id: "LIST"}]
      }
    }),
  }),
});

export const  {
    useGetNotesQuery,

} = notesApiSlice

// Return the Query Result
export const selectNotesResult = notesApiSlice.endpoints.getNotes.select()

const selectNotesData = createSelector (
    selectNotesResult,
    notesResult => notesResult.notes,
)

// Getselector create these selectors and we rename them to with aliases using destructing
export const {
    selectAll: selectAllnotes,
    selectById: selectnotesById,
    selectId : selectUserIds,

}= notesAdapter.getSelectors(state => selectNotesData(state) ?? initialState)
