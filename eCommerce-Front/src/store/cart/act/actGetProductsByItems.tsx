import { TProduct } from "@types";
import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "@store";
import {axiosError} from "@utils";
import axios from "axios";
type TResponse = TProduct[];

const actGetProductsByItems = createAsyncThunk("cart/actGetProductsByItems", async (_, thunkAPI) => {
    const {rejectWithValue, fulfillWithValue, getState, signal} = thunkAPI;
    const {cart} = getState() as RootState;
    const itemsID = Object.keys(cart.items);
    const concatenatedIDs = itemsID.map((item) => `id=${item}`).join("&");

    if(!itemsID.length){
        return fulfillWithValue([]);
    }
    try {
        const reponse = await axios.get<TResponse>(`/products?${concatenatedIDs}`, {signal});
        return reponse.data;
    } catch (error) {
        return rejectWithValue(axiosError(error))
    }
})

export default actGetProductsByItems