import { FC, PropsWithChildren } from "react";
import "./Stack.scss";

const Stack: FC<PropsWithChildren> = ({ children }) => {
  return <div className="Stack">{children}</div>;
};

export default Stack;
