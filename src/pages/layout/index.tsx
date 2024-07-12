import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import UserSidebar from "../../components/user-sidebar";

const Layout = () => {
  const token = "";
  return (
    <div className={`flex ${token ? "flex-row" : "flex-col"} `}>
      {token ? <UserSidebar /> : <Header />}
      <Outlet />
    </div>
  );
};

export default Layout;
