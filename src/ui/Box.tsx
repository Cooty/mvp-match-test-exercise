import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import "./Box.scss";
import classNames from "classnames";

type Props = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

const Box: FC<Props> = ({ children, className, ...props }) => (
  <div className={classNames("Box", className)} {...props}>
    {children}
  </div>
);

export const BoxTitle: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <h2 className="Box__header" {...props}>
      {children}
    </h2>
  );
};

export default Box;
