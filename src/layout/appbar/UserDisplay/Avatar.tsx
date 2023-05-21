import { FC } from "react";
import "./Avatar.scss";

interface Props {
  initials: string;
}

const Avatar: FC<Props> = ({ initials }) => {
  return <span className="Avatar strong">{initials}</span>;
};

export default Avatar;
