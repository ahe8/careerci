import { createSlice } from "@reduxjs/toolkit"

import { Certification } from "../types/types"


const initialState: Certification[] = [];

const certificationSlice = createSlice({
    name:"certifications",
    initialState,
    reducers: {
        appendCertification(state, action) {
            state.push(action.payload);
        },
        setCertifications(state, action) {
            return action.payload;
        }
    }
})


export const { appendCertification, setCertifications} = certificationSlice.actions;

export default certificationSlice.reducer;