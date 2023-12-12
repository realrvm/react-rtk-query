import { $api } from "../../../../shared/api";

export type StateSchema = {
  [$api.reducerPath]: ReturnType<typeof $api.reducer>;
};
