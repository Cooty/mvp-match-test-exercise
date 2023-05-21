import { FC, PropsWithChildren } from "react";
import "./AppBar.scss";

const AppBar: FC<PropsWithChildren> = ({ children }) => {
  return <header className="AppBar">{children}</header>;
};

export default AppBar;
