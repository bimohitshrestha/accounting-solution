"use client";

import store from "@/lib/store/store";
import { Provider } from "react-redux";

const ProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
