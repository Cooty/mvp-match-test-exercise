import { FC } from "react";
import "./UserDisplay.scss";
import Avatar from "./Avatar";
import getInitials from "./get-initials";
import { userUserStore } from "../../../store";

const UserDisplay: FC = () => {
  const users = userUserStore((state) => state.users);

  return (
    <span className="UserDisplay">
      {users.length !== 0 ? (
        <>
          <Avatar
            initials={getInitials(users[0].firstName, users[0].lastName)}
          />
          <span className="UserDisplay__name strong">
            {users[0].firstName}&nbsp;{users[0].lastName}
          </span>
        </>
      ) : null}
    </span>
  );
};

export default UserDisplay;
