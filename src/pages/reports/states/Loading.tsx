import { FC } from "react";
import LoadingSpinner from "../../../ui/LoadingSpinner";

const Loading: FC = () => {
  return (
    <div style={{ margin: "auto" }}>
      <LoadingSpinner size="60px" color="var(--green)" />
    </div>
  );
};

export default Loading;
