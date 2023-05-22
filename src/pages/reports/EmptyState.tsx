import { FC } from "react";
import { ReactComponent as EmptyStateIllustration } from "../../images/empty-state-illustration.svg";
import "./EmptyState.scss";

const EmptyState: FC = () => (
  <div className="EmptyState">
    <div>
      <h1 className="text-center">No reports</h1>
      <p className="text-center strong color-grey">
        Currently you have no data for the reports to be generated. Once you
        start generating traffic through the Balance application the reports
        will be shown.
      </p>
    </div>
    <figure className="EmptyState__illustration">
      <EmptyStateIllustration />
    </figure>
  </div>
);

export default EmptyState;
