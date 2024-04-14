import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

const page = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
page.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);
