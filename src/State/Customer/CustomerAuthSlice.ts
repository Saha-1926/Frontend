import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { User } from "../../Type/UserType";
/* ===========================
   🔹 SEND OTP
=========================== */
export const sendCustomerOtp = createAsyncThunk(
  "/auth/sendCustomerOtp",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/sent/login-signup-otp", {
        email,
        role: "ROLE_CUSTOMER",
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

/* ===========================
   🔹 SIGNIN
=========================== */
export const customerSignin = createAsyncThunk(
  "/auth/customerSignin",
  async (loginRequest: any, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signing", loginRequest);

      console.log("✅ LOGIN RESPONSE:", response.data);

      localStorage.setItem("jwt", response.data.jwt);
      return response.data;

    } catch (error: any) {
      console.error("❌ LOGIN ERROR:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
/* ===========================
   🔹 FETCH USER PROFILE
=========================== */
export const fetchUserProfile = createAsyncThunk(
  "/customer/profile",
  async (_, { rejectWithValue }) => {
    try {
      const jwt = localStorage.getItem("jwt");

      if (!jwt) {
        throw new Error("No JWT found");
      }

      const response = await api.get("/customer/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      console.log("✅ user profile:", response.data);

      return response.data;

    } catch (error: any) {
      console.log("❌ error - - - ", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

/* ===========================
   🔹 SIGNUP
=========================== */
export const signup = createAsyncThunk(
  "/auth/signup",
  async (signupRequest: any, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signup", signupRequest);

      console.log("✅ SIGNUP RESPONSE:", response.data);

      localStorage.setItem("jwt", response.data.jwt);
      return response.data;

    } catch (error: any) {
      console.error("❌ SIGNUP ERROR:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

/* ===========================
   🔹 LOGOUT
=========================== */
export const logout = createAsyncThunk(
  "/auth/logout",
  async (navigate: any, { rejectWithValue }) => {
    try {
      localStorage.clear();

      console.log("✅ LOGOUT SUCCESS");

      navigate("/");

    } catch (error: any) {
      console.error("❌ LOGOUT ERROR:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

/* ===========================
   🔹 STATE
=========================== */
interface AuthState {
  jwt: string | null;
  otpSent: boolean;
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  jwt: null,
  otpSent: false,
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null,
};

/* ===========================
   🔹 SLICE
=========================== */
const customerAuthSlice = createSlice({
  name: "customerAuth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      /* ===== SEND OTP ===== */
      .addCase(sendCustomerOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendCustomerOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = true;
      })
      .addCase(sendCustomerOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      /* ===== SIGNIN ===== */
      .addCase(customerSignin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(customerSignin.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
        state.isLoggedIn = true;
      })
      .addCase(customerSignin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      /* ===== SIGNUP ===== */
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
        state.isLoggedIn = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
.addCase(fetchUserProfile.pending, (state) => {
  state.loading = true;
  state.error = null;
})
.addCase(fetchUserProfile.fulfilled, (state, action) => {
  state.loading = false;
  state.user = action.payload;   // ✅ store user data
})
.addCase(fetchUserProfile.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload as string;
})
      /* ===== LOGOUT ===== */
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.jwt = null;
        state.isLoggedIn = false;
        state.user = null;
        state.otpSent = false;
        state.loading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default customerAuthSlice.reducer;