import { FC } from "react";
import { ReactComponent as LogoSVG } from "../../images/logo.svg";
import "./Logo.scss";

const Logo: FC = () => {
  return (
    <span className="Logo">
      <LogoSVG title="B" />
    </span>
  );
};

export default Logo;
