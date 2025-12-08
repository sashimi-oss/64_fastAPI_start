import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetch リクエストを送る
export type Tweet = {
  tweetId: number;
  content: string;
  prosOrCons: boolean;
  category: string;
};

export const fetchTweets = createAsyncThunk<Tweet[], void, {rejectValue: string}>(
    "tweets/fetchTweets",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get("http://localhost:8000/connect-db");
            return res.data;
        } catch (err) {
            return rejectWithValue("ツイートの取得に失敗しました");
        }
    }
);