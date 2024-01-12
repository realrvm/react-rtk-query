import { asyncThunkCreator, buildCreateSlice, nanoid } from "@reduxjs/toolkit";
import { ListItem } from "../types";

const initialState: ListItem[] = [];

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: (create) => ({
    addListItem: create.preparedReducer(
      (text: string) => {
        const id = nanoid();
        return { payload: { id, text } };
      },
      (state, action) => {
        state.push(action.payload);
      },
    ),
  }),
  selectors: {
    getList: (state) => state,
  },
});

export const { reducer: listReducer, actions: listActions } = listSlice;

export const { getList } = listSlice.selectors;
