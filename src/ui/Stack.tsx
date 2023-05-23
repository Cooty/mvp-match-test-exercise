import { FC, PropsWithChildren, HTMLAttributes, ReactNode } from "react";
import "./Stack.scss";

type Props = HTMLAttributes<HTMLDivElement> & { children: ReactNode };

const Stack: FC<Props> = ({ children, ...props }) => {
  return (
    <div className="Stack" {...props}>
      {children}
    </div>
  );
};

export default Stack;
