import { TCategory } from "@types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosError } from "@utils";

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk("categories/actGetCategories", async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;

    try {
        const response = await axios.get<TResponse>("/categories", {
            signal,
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(axiosError(error))
    }
})

export default actGetCategories;