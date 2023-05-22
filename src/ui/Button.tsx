import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import "./Button.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button className="Button" {...props}>
      {children}
    </button>
  );
};

export default Button;
