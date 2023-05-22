import { FC } from "react";
import "./UserDisplay.scss";
import Avatar from "./Avatar";
import getInitials from "./get-initials";
import { userUserStore } from "../../../store";

const UserDisplay: FC = () => {
  const user = userUserStore((state) => state.user);

  return (
    <span className="UserDisplay">
      {user !== null ? (
        <>
          <Avatar initials={getInitials(user.firstName, user.lastName)} />
          <span className="UserDisplay__name strong">
            {user.firstName}&nbsp;{user.lastName}
          </span>
        </>
      ) : null}
    </span>
  );
};

export default UserDisplay;
