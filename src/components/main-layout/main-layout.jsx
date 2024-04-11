import { Outlet } from "react-router-dom";
import "./main-layout.scss";
import Header from "@/components/header";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
