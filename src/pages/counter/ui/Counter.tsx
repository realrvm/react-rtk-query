import { FC } from "react";

import { counterActions, getCountValue } from "..";
import { useActionCreators, useStateSelector } from "@/app/providers/rtk-query";

import styles from "./styles.module.scss";

type CounterProps = Record<string, never>;

export const Counter: FC<CounterProps> = () => {
  const count = useStateSelector(getCountValue);
  const countAction = useActionCreators(counterActions);

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
