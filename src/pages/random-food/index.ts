export { RandomFood } from "./ui/RandomFood";

export type { RandomFoodSchema } from "./model/types";

export {
  randomFoodReducer,
  randomFoodActions,
} from "./model/slice/randomFoodSlice";

export {
  getRandomFoodDish,
  getRandomFoodDescription,
} from "./model/slice/randomFoodSlice";
