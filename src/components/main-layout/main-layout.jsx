import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";
import { StyledMainLayout } from "./main-layout.styled";

export const MainLayout = () => {
  return (
    <StyledMainLayout>
      <Header />
      <Outlet />
    </StyledMainLayout>
  );
};
