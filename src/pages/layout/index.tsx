import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import UserSidebar from "../../components/user-sidebar";

const Layout = ({isAuthenticated}:{isAuthenticated:boolean}) => {
  return (
    <div className={`flex ${isAuthenticated ? "flex-row" : "flex-col"} `}>
      {isAuthenticated ? <UserSidebar /> : <Header />}
      <Outlet />
    </div>
  );
};

export default Layout;
