import { FC } from "react";
import "./UserDisplay.scss";
import UserInterface from "../../../interfaces/User";
import Avatar from "./Avatar";
import getInitials from "./get-initials";

type Props = Omit<UserInterface, "userId" | "email">;

const UserDisplay: FC<Props> = ({ firstName, lastName }) => {
  return (
    <span className="UserDisplay">
      <Avatar initials={getInitials(firstName, lastName)} />
      <span className="UserDisplay__name strong">
        {firstName}&nbsp;{lastName}
      </span>
    </span>
  );
};

export default UserDisplay;
