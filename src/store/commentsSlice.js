import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";


const endpoint = "https://striveschool-api.herokuapp.com/api/comments";
let apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdlNTJlOWI5YzBmNzAwMTQ0ODRlZjAiLCJpYXQiOjE2ODc2MDMxMDEsImV4cCI6MTY4ODgxMjcwMX0.fl3U_7efumNdxrEMiZo5d4Jw2JxcHczJgA_aTuUJkO8";
let asinello = '';
let comment_ID = '';

const initialState = {
    comments: [],
    asin: '',
    status: 'idle',
    commentID: '',
    refresh: false,
    currentComment: {}
}
let postPayload = {}
let putPayload = undefined;
let putAsin = ''
const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setCurrentComment(state, action) {
            state.currentComment = action.payload
        },
        refresh(state, action) {
            state.refresh = !state.refresh
        },
        getPostPayload(state, action) {
            postPayload = action.payload
        },
        getPutPayload(state, action) {
            putPayload = action.payload

        },
        setPutAsin(state, action) {
            putAsin = action.payload
            /* console.log(putAsin) */
        },
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
            .addCase(deleteComment.fulfilled, (state, action) => {
                
            })
    }
})




export const { setAsin, setPutAsin, setCommentID, getPostPayload, refresh, getPutPayload, setCurrentComment } = commentsSlice.actions;
export const { fetchComments } = commentsSlice.actions
export default commentsSlice.reducer;

export const getComments = createAsyncThunk('comments/get', async () => {
    const data = await fetch(endpoint + '/' + asinello, {
        headers: {
            "Authorization": apiKey
        }
    });
    const res = await data.json();
    return res
})


export const deleteComment = createAsyncThunk('comments/delete', async (_, { dispatch }) => {
    const delRes = await fetch(endpoint + '/' + comment_ID, {
        method: "DELETE",
        headers: {
            "Authorization": apiKey
        }
    });

})

export const postComment = createAsyncThunk('comments/post', async (postPayload) => {
    const postRes = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(postPayload),
        headers: {
            "Content-Type": "application/json",
            "Authorization": apiKey

        }
    });
    const res = await postRes.json()
})

export const putComment = createAsyncThunk('comments/put', async (_, { dispatch }) => {
    try {
        const putRes = await fetch(endpoint + "/" + putPayload._id, {
        method: "PUT",
        body: JSON.stringify(putPayload),
        headers: {
            "Content-Type": "application/json",
            "Authorization": apiKey

        }
    });
    const res = await putRes.json()
    } catch (error) {
        console.log(error)
    }
    
})