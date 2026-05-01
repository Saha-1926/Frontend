import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

// 🔹 Async function to send OTP
export const sendLoginSignupOtp = createAsyncThunk(
  "/auth/sendLoginSignupOtp",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/sent/login-signup-otp", { email ,
  role: "ROLE_SELLER"});
      console.log("login otp ", response);
      return response.data;
    } catch (error: any) {
      console.log("error ----- ", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const signin = createAsyncThunk<any,any>("/auth/signin",
  async(loginRequest, {rejectWithValue})=>{
    try {
      const response = await api.post("/auth/signing",loginRequest)
      console.log("login otp ",response.data)
 const jwt=response.data.jwt;
      localStorage.setItem("jwt", jwt);      
    } catch (error: any) {
      console.log("error - - - ", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 🔹 Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    otpSent: false,
    loading: false,
    error: null as string | null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(sendLoginSignupOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendLoginSignupOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = true;
      })
      .addCase(sendLoginSignupOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;