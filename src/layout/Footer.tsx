import { FC, PropsWithChildren } from "react";
import "./Footer.scss";

const Footer: FC<PropsWithChildren> = ({ children }) => {
  return <footer className="Footer">{children}</footer>;
};

export default Footer;
