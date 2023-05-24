import { FC, HTMLAttributes, ReactNode } from "react";
import "./Box.scss";
import classNames from "classnames";

type Props = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

const Box: FC<Props> = ({ children, className, ...props }) => (
  <div className={classNames("Box", className)} {...props}>
    {children}
  </div>
);

export default Box;
