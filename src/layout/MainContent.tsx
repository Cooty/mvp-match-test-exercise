import { FC, PropsWithChildren } from "react";
import "./MainContent.scss";

const MainContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="MainContent">
      <div className="MainContent__wrapper">{children}</div>
    </main>
  );
};

export default MainContent;
