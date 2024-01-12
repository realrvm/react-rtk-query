import { ComponentProps, FC, useState } from "react";

import { getList, listActions } from "..";
import { useActionCreators, useStateSelector } from "@/app/providers/rtk-query";

import styles from "./styles.module.scss";

type ListProps = Record<string, never>;

export const List: FC<ListProps> = () => {
  const [value, setValue] = useState("");

  const listAction = useActionCreators(listActions);
  const listItems = useStateSelector(getList);

  const handleChange: ComponentProps<"input">["onChange"] = (e) => {
    const target = e.target;
    setValue(target.value);
  };

  const handleClick = () => {
    listAction.addListItem(value);
    setValue("");
  };

  return (
    <section>
      <h2>prepared reducer</h2>
      <ul>
        {listItems
          ? listItems.map((item) => {
              const { id, text } = item;
              return <li key={id}>{text}</li>;
            })
          : null}
      </ul>
      <div className={styles["prepared-reducer"]}>
        <input type="text" onChange={handleChange} value={value} />
        <button onClick={handleClick}>Add item</button>
      </div>
    </section>
  );
};
