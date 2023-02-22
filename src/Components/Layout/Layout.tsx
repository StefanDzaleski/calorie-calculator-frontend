import "./Layout.css";

import { Outlet } from "react-router-dom";
import Navigator from "../Navigator/Navigator";

interface Props {
  index: number;
}

function Layout({ index }: Props) {
  return (
    <div className="layout">
      <Navigator index={index} />
      <Outlet />
    </div>
  );
}

export default Layout;
