import { FC, HTMLAttributes, ReactNode } from "react";
import "./Table.scss";

type Props = HTMLAttributes<HTMLTableElement> & {
  children: ReactNode;
};

const Table: FC<Props> = ({ children, ...props }) => {
  return (
    <table {...props} className="Table">
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
