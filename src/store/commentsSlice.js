import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const endpoint = "https://striveschool-api.herokuapp.com/api/comments";
let apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlNTJlOWI5YzBmNzAwMTQ0ODRlZjAiLCJpYXQiOjE2ODc2MDMxMDEsImV4cCI6MTY4ODgxMjcwMX0.fl3U_7efumNdxrEMiZo5d4Jw2JxcHczJgA_aTuUJkO8";
let asinello = '';
let comment_ID = '';

const initialState = {
    comments: [],
    asin: '',
    status: 'idle',
    commentID: '',
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setAsin(state, action) {
            state.asin = action.payload
            asinello = state.asin
        },
        setCommentID(state, action) {
            state.commentID = action.payload;
            comment_ID = state.commentID
        }
    },
    extraReducers: (builder) => {
        builder
         .addCase(getComments.fulfilled, (state, action) => {
            state.status = 'idle';
            state.comments = action.payload
         })
         .addCase(getComments.pending, (state, action) => {
            state.status = 'pending'
         })
         .addCase(getComments.rejected, (state, action) => {
            state.status = 'error'
         })
         .addCase(deleteComment.fulfilled, (state, action) =>{
            console.log("ok")
         })
    }
})

export const {setAsin, setCommentID} = commentsSlice.actions;
export const {fetchComments} = commentsSlice.actions
export default commentsSlice.reducer;

export const getComments = createAsyncThunk('comments/get', async () => {
    const data = await fetch(endpoint + '/' + asinello, {
        headers: {
            "Authorization": apiKey
        }});
            const res = await data.json();
            return res
})


export const deleteComment = createAsyncThunk('comments/delete', async () => {
    const delRes = await fetch(endpoint + '/' + comment_ID, {
        headers: {
            method: "DELETE",
            "Authorization": apiKey
        }});
        console.log(delRes)
})