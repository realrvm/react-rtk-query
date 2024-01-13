import { ComponentProps, FC, useState } from "react";

import { useActionCreators, useStateSelector } from "@/app/providers/rtk-query";
import { getQuote, quotesActions } from "..";

import styles from "./styles.module.scss";

type QuotesProps = Record<string, never>;

export const Quotes: FC<QuotesProps> = () => {
  const [quoteId, setQouteId] = useState("");
  const { author, quote } = useStateSelector(getQuote);
  const quoteAction = useActionCreators(quotesActions);

  const handleClick = () => {
    quoteAction.addQouteId({ quoteId });
    setQouteId("");
  };

  const handleChange: ComponentProps<"input">["onChange"] = (e) => {
    const target = e.target;
    setQouteId(target.value);
  };

  return (
    <section>
      <div className={styles.quotes}>
        <h2>Quotes</h2>
        <p>{author}</p>
        <p>{quote}</p>
        <input
          type="text"
          value={quoteId}
          placeholder="Enter number"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add qoutes</button>
      </div>
    </section>
  );
};
