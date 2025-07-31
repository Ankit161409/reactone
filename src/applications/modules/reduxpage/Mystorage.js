import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./Actionlist";

export const actionstore = configureStore({
    reducer: {
        counter:counterSlice
    },
})