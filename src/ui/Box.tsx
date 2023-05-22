import { FC, HTMLAttributes, ReactNode } from "react";
import "./Box.scss";

type Props = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

const Box: FC<Props> = ({ children, ...props }) => (
  <div className="Box" {...props}>
    {children}
  </div>
);

export default Box;
