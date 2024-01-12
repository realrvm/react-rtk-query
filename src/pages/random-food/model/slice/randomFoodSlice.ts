import {
  PayloadAction,
  asyncThunkCreator,
  buildCreateSlice,
} from "@reduxjs/toolkit";
import { RandomFoodSchema } from "../types";
import { ThunkConfig } from "@/app/providers/rtk-query";
import { AxiosError } from "axios";

type ValidationErrors = {
  errorMessage: string;
};

const initialState: RandomFoodSchema = {
  dish: "1",
  description: "2",
};

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const randomFoodSlice = createSlice({
  name: "randomFood",
  initialState,
  reducers: (create) => ({
    fetchRandomFood: create.asyncThunk<
      void,
      RandomFoodSchema,
      ThunkConfig<string>
    >(
      async (_, thunkApi): Promise<any> => {
        const { extra, rejectWithValue } = thunkApi;

        try {
          const response =
            await extra.api.get<RandomFoodSchema>("/food/random_food");

          return response.data;
        } catch (err) {
          const error: AxiosError<ValidationErrors> = err as Error &
            AxiosError<ValidationErrors>;
          if (!error.response) {
            throw err;
          }

          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: (state) => {
          state.dish = "loading";
        },
        rejected: (state) => {
          state.dish = "error";
        },
        fulfilled: (state, action: PayloadAction<RandomFoodSchema>) => {
          state.dish = action.payload.dish;
          state.description = action.payload.description;
        },
      },
    ),
  }),
  selectors: {
    getRandomFoodDish: (state) => state.dish,
    getRandomFoodDescription: (state) => state.description,
  },
});

export const { reducer: randomFoodReducer, actions: randomFoodActions } =
  randomFoodSlice;

export const { getRandomFoodDescription, getRandomFoodDish } =
  randomFoodSlice.selectors;
