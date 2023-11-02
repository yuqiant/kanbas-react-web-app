import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
    modules: db.modules,
    module: { name: "New Assignment 123", description: "New Description" },
};