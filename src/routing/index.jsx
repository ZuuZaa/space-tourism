import { Route, Routes } from "react-router-dom";
import MainLayout from "@/components/main-layout";
import HomePage from "@/pages/home";
import DestinationPage from "@/pages/destination";
import CrewPage from "@/pages/crew";
import TechnologyPage from "@/pages/technology";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="destination/:name" element={<DestinationPage />} />
        <Route path="crew" element={<CrewPage />}>
          {/* <Route index element={<Navigate to="commander" />} />
          <Route path=":role" element={<CrewContent />} /> */}
        </Route>
        <Route path="technology" element={<TechnologyPage />}>
          {/* <Route index element={<Navigate to="launch" />} />
          <Route path=":id" element={<TechnologyContent />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};
