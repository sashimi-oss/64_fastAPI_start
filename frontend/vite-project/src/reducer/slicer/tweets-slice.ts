import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets } from "../../action/tweet";
import type { Tweet } from "../../action/tweet";

type TweetsState = {
    list: Tweet[];
    loading: boolean;
    error: string | null;
}

const initialState: TweetsState = {
    list: [],
    loading: false,
    error: null,
}

const tweetsSlice = createSlice({
    name: "tweets",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTweets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTweets.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchTweets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? "不明なエラー";
            });
    },
});

export default tweetsSlice.reducer;