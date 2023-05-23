import { FC } from "react";
import classNames from "classnames";
import "./SideBar.scss";
import { useMenu } from "../store";
import { ReactComponent as ChartIcon } from "../images/menu-icons/chart.svg";
import { ReactComponent as GridIcon } from "../images/menu-icons/grid.svg";
import { ReactComponent as PaymentIcon } from "../images/menu-icons/payment.svg";
import { ReactComponent as ReportsIcon } from "../images/menu-icons/reports.svg";
import { ReactComponent as LogoutIcon } from "../images/menu-icons/logout.svg";

const SideBar: FC = () => {
  const isOpened = useMenu((state) => state.isOpened);

  return (
    <nav className={classNames("SideBar", { "SideBar--isOpened": isOpened })}>
      <a href="#" className="SideBar__item">
        <ChartIcon />
      </a>
      <a href="#" className="SideBar__item">
        <GridIcon />
      </a>
      <a href="#" className="SideBar__item">
        <PaymentIcon />
      </a>
      <a href="#" className="SideBar__item">
        <ReportsIcon />
      </a>
      <a href="#" className="SideBar__item">
        <LogoutIcon />
      </a>
    </nav>
  );
};

export default SideBar;
