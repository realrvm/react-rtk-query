import { FC, useEffect } from "react";

import styles from "./styles.module.scss";
import { useActionCreators, useStateSelector } from "@/app/providers/rtk-query";
import {
  getRandomFoodDescription,
  getRandomFoodDish,
  randomFoodActions,
} from "..";

type RandomFoodProps = Record<string, never>;

export const RandomFood: FC<RandomFoodProps> = () => {
  const dish = useStateSelector(getRandomFoodDish);
  const descr = useStateSelector(getRandomFoodDescription);

  const dispatch = useActionCreators(randomFoodActions);

  useEffect(() => {
    dispatch.fetchRandomFood();
  }, []);

  return (
    <section>
      <h2>Async Thunks Inside createSlice</h2>
      <div className={styles["random-food"]}>
        <p>{dish}</p>
        <p>{descr}</p>
      </div>
    </section>
  );
};
