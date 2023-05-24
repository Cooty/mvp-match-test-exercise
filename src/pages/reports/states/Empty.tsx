import { FC } from "react";
import { ReactComponent as EmptyIllustration } from "../../../images/empty-state-illustration.svg";
import "./Empty.scss";

type Props = { explanation?: string };

const Empty: FC<Props> = ({ explanation }) => (
  <div className="Empty">
    <div>
      <h1 className="text-center">No reports</h1>
      <p className="text-center strong color-grey">
        {explanation ? (
          explanation
        ) : (
          <>
            Currently you have no data for the reports to be generated. Once you
            start generating traffic through the Balance application the reports
            will be shown.
          </>
        )}
      </p>
    </div>
    <figure className="Empty__illustration">
      <EmptyIllustration />
    </figure>
  </div>
);

export default Empty;
