import { TProduct } from "@types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[];

// Define the type for the `prefix` parameter and the return value
const actGetProductsByCatPrefix = createAsyncThunk<
  TResponse, // Return type of the thunk
  string, // Type of the `prefix` argument
  { rejectValue: string } // Type of the value returned by `rejectWithValue`
>(
  "products/actGetProductsByCatPrefix",
  async (prefix, { rejectWithValue, signal }) => {
    try {
      const response = await axios.get<TResponse>(
        `/products?cat_prefix=${prefix}`, {
        signal,
      }
      );
      return response.data; // Success case
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data?.message || error.message || "An error occurred"
        );
      }
      return rejectWithValue("An unexpected error occurred"); // Fallback for non-Axios errors
    }
  }
);

export default actGetProductsByCatPrefix;
