import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";
import "./main-layout.style.scss";

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <Outlet />
    </div>
  );
};
