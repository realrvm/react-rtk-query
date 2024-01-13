import { FC, useEffect } from "react";

import { counterActions, getCountValue } from "..";
import {
  addAppListener,
  useActionCreators,
  useAppDispatch,
  useStateSelector,
} from "@/app/providers/rtk-query";

import styles from "./styles.module.scss";

type CounterProps = Record<string, never>;

export const Counter: FC<CounterProps> = () => {
  const count = useStateSelector(getCountValue);
  const countAction = useActionCreators(counterActions);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    countAction.increment();
  };

  const handleDecrement = () => {
    countAction.decrement();
  };

  const deleteCount = () => {
    countAction.delete();
  };

  const setValue = () => {
    countAction.setValue(10);
  };

  // так делать не рекомендуется. Просто для примера
  useEffect(() => {
    const unsubscribe = dispatch(
      addAppListener({
        actionCreator: counterActions.increment,
        effect: async (action, listenerApi) => {
          await listenerApi.delay(2000);
          console.log(action, listenerApi);
        },
      }),
    );
    return unsubscribe;
  }, []);

  return (
    <section>
      <h2>Компонент Counter и rtk</h2>
      <div className={styles["counter"]}>
        <p>{count}</p>
        <div className={styles["counter__btns"]}>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={deleteCount}>Delete</button>
          <button onClick={setValue}>Set 10</button>
        </div>
      </div>
    </section>
  );
};
