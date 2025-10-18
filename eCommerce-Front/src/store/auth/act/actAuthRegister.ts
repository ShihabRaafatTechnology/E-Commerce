import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosError from "@utils/axiosError";

type TFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const actAuthRegister = createAsyncThunk("auth/actAuthRegister", async (formData: TFormData, thunk) =>{
    const { rejectWithValue } = thunk;
    try {
        console.log(formData);
        
        const res = await axios.post("/register", formData);
        console.log("res" + res.data);
        
        return res.data
    } catch (error) {
        return rejectWithValue(axiosError(error));
    }
})

export default actAuthRegister;