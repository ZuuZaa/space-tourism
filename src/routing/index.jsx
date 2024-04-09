import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/components/main-layout/main-layout";
import { Home } from "@/pages/home";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout background="home-background" />}>
        <Route index element={<Home />} />
        {/* <Route path="destination" element={<Destination />}>
          <Route index element={<Navigate to="moon" />} />
          <Route path=":name" element={<DestinationContent />} />
        </Route>
        <Route path="crew" element={<Crew />}>
          <Route index element={<Navigate to="commander" />} />
          <Route path=":role" element={<CrewContent />} />
        </Route>
        <Route path="technology" element={<Technology />}>
          <Route index element={<Navigate to="launch" />} />
          <Route path=":id" element={<TechnologyContent />} />
        </Route> */}
      </Route>
    </Routes>
  );
};
