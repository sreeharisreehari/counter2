import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./counterslice";


 export const store= configureStore({
    // reducer can only update value of state in sstore
    // reducer key is predefined(object which can store more than 1 reducer)
    // createaction and createreducer are used to  create action and reducer file seperately.

    reducer:{
        // reducer is coming from counterslice since we are export reducer as export default
        counter:counterslice

    }
})
