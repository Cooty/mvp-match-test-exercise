import { FC, PropsWithChildren } from "react";
import "./TwoColumnContent.scss";

const TwoColumnContent: FC<PropsWithChildren> = ({ children }) => (
  <section className="TwoColumnContent">{children}</section>
);

export default TwoColumnContent;
