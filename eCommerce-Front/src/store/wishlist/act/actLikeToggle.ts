import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {axiosError} from "@utils";

const actLikeToggle = createAsyncThunk("wishlist/actLikeToggle", async (id:number, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    console.log("ActLikeToggle: " + id);
    
    try {
        const isLike = await axios.get(`/wishlist?userId=1&productId=${id}`, {signal});
        if (isLike.data.length > 0) {
            await axios.delete(`/wishlist/${isLike.data[0].id}`);
            return { type: "remove", id };
        } else {
            await axios.post("/wishlist", { userId: "1", productId: id });
            return { type: "add", id };
        }
    } catch (error) {
        return rejectWithValue(axiosError(error))
    }
});
export default actLikeToggle;