import { FC, PropsWithChildren } from "react";
import AppBar from "./AppBar";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "./Layout.scss";
import SideBar from "./SideBar";
import Logo from "./appbar/Logo";
import MenuController from "./appbar/MenuController";
import Stack from "../ui/Stack";
import UserDisplay from "./appbar/UserDisplay/UserDisplay";
import { useMenu } from "../store";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const toggle = useMenu((state) => state.toggle);

  return (
    <div className="Layout">
      <AppBar>
        <Stack>
          <Logo />
          <MenuController onClick={toggle} />
        </Stack>
        <UserDisplay />
      </AppBar>
      <SideBar />
      <MainContent>{children}</MainContent>
      <Footer>
        <a href="#" className="strong">
          Terms & Conditions
        </a>
        &nbsp;|&nbsp;
        <a href="#" className="strong">
          Privacy policy
        </a>
      </Footer>
    </div>
  );
};

export default Layout;
