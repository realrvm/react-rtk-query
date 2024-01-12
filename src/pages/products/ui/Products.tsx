import { FC } from "react";

import { useGetProductsList } from "../model/api/productsApi";

import styles from "./styles.module.scss";

type ProductsProps = Record<string, never>;

export const Products: FC<ProductsProps> = () => {
  const { data: productsList, isError, isLoading } = useGetProductsList();

  if (isError) return <div>Error...</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <h2>rtk-query</h2>
      <ul className={styles["products"]}>
        {productsList
          ? productsList.products.map((product) => {
              const { id, title } = product;
              return <li key={id}>{title}</li>;
            })
          : null}
      </ul>
    </section>
  );
};
