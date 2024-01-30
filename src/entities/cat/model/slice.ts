import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CatState } from "./types";
import { getCats } from "../api";

const initialState: CatState = {
  cats: [],
  favorites: [],
  status: 'pending',
};

export const loadingCats = createAsyncThunk(
  'cat/loadingCats',
  async (page: number) => {
    const res = await getCats(page);
    return res.data;
  }
);

const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    loadingFavorites(state, action) {
      if(state.favorites.length === 0) {
        state.favorites = action.payload;
      }
    },

    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },

    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter((cat) => cat.id !== action.payload.id);
    }
  },
  extraReducers(builder) {
    builder.addCase(loadingCats.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.cats = [...state.cats, ...action.payload];
    });
    builder.addCase(loadingCats.rejected, (state) => {
      state.status = 'rejected';
    });
    builder.addCase(loadingCats.pending, (state) => {
      state.status = 'pending';
    });
  },
});

export const catReducer = catSlice.reducer;
export const catSelector = (root: RootState) => root.cat;
export const { addToFavorites, removeFromFavorites, loadingFavorites } = catSlice.actions;