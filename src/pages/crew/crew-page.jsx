import { NAV_LINKS } from "@/config/constans";
import CrewContent from "./crew-content";
import PageLayout from "@/components/page-layout";

const CrewPage = () => {
  return (
    <PageLayout pageDetails={NAV_LINKS.CREW}>
      <CrewContent />
    </PageLayout>
  );
};

export default CrewPage;
