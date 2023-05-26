import { FC, HTMLAttributes } from "react";
import "./Table.scss";

type Props = HTMLAttributes<HTMLTableElement> & {
  rows: Array<string[]>;
};

const Table: FC<Props> = ({ rows, ...props }) => {
  return (
    <table {...props} className="Table">
      <tbody>
        {rows.map((row) => (
          <tr>
            {row.map((cell) => (
              <td>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
