import ReactDOM from "react-dom/client";
import { App } from "@/app/App";

import { AppProvider } from "@/app/providers/rtk-query";

import "@/app/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <App />
  </AppProvider>,
);
