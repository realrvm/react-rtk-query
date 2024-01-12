import { startAppListening } from "@/app/providers/rtk-query";
import { counterActions } from "../..";

startAppListening({
  actionCreator: counterActions.setValue,
  effect: async (action, listenerApi) => {
    console.log(action.type, listenerApi);
  },
});
