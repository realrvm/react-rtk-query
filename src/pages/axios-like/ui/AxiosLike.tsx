import { FC } from "react";

import styles from "./styles.module.scss";
import { get401 } from "../model/api/axiosLikeApi";
import { useAppDispatch } from "@/app/providers/rtk-query";

type AxiosLikeProps = Record<string, never>;

export const AxiosLike: FC<AxiosLikeProps> = () => {
  const dispatch = useAppDispatch();
  return (
    <section>
      <h2>Simulating axios-like interceptors with a custom base query</h2>
      <p className={styles["axios-like"]}></p>
      <button onClick={() => dispatch(get401)}>login</button>
    </section>
  );
};
