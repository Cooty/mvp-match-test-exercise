import { FC, HTMLAttributes } from "react";
import { ReactComponent as MenuSVG } from "../../images/menu.svg";
import "./MenuController.scss";

const MenuController: FC<HTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      className="MenuController"
      onClick={onClick}
      {...props}
    >
      <MenuSVG title="Toggle the side menu" />
    </button>
  );
};

export default MenuController;
