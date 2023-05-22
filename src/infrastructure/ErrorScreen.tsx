import { FC } from "react";
import Layout from "../layout/Layout";
import "./ErrorScreen.scss";

const ErrorScreen: FC<{ errorText?: string }> = ({ errorText }) => {
  return (
    <Layout>
      <div className="ErrorScreen">
        <h1>{errorText}</h1>
      </div>
    </Layout>
  );
};

export default ErrorScreen;
