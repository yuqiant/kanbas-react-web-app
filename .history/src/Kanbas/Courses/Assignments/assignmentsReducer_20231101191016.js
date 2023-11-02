import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
    modules: db.modules,
    module: { title: "New Assignment 123" },
};