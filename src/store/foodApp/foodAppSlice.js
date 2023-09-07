import { createSlice } from "@reduxjs/toolkit";

export const foodAppSlice = createSlice({
  name: "foodApp",
  initialState: {
    
    restaurant: [],
    activeRestaurant: null,
    plates: [],
    activePlates: null,
  },
  reducers: {
    setActiveRestaurant: (state, action) => {
      state.activeRestaurant = action.payload;
    },

    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    setActivePlates: (state, action) => {
      state.activePlates = action.payload;
    },

    setPlates: (state, action) => {
      state.plates = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setActiveRestaurant, setRestaurant, setActivePlates, setPlates } = foodAppSlice.actions;
