import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";
import { StyledMainLayout } from "./main-layout.styled";

const MainLayout = () => {
  return (
    <StyledMainLayout>
      <Header />
      <Outlet />
    </StyledMainLayout>
  );
};

export default MainLayout;
