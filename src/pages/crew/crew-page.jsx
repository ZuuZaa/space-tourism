import { NAV_LINKS } from "@/config/constans";
import PageLayout from "@/components/page-layout";
import CrewContent from "./components/crew-content";

const CrewPage = () => {
  return (
    <PageLayout pageDetails={NAV_LINKS.CREW}>
      <CrewContent />
    </PageLayout>
  );
};

export default CrewPage;
