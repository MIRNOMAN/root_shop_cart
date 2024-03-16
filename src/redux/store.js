import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import favouriteSlice from "./slice/favouriteSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
    reducer :{
        cart : cartSlice.reducer,
        favourites: favouriteSlice.reducer,
        userSlice: userSlice,
    }
})