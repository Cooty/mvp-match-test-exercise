import { FC } from "react";
import "./LoadingSpinner.scss";

const LoadingSpinner: FC<{ size?: string; color?: string }> = ({
  size = "40px",
  color = "#fff",
  ...props
}) => {
  return (
    <div
      className="LoadingSpinner"
      style={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        "--spinner-size": size,
        "--spinner-color": color,
      }}
      {...props}
    >
      <div className="LoadingSpinner__animationContainer">
        <div />
      </div>
    </div>
  );
};

export default LoadingSpinner;
