import { NAV_LINKS } from "@/config/constans";
import PageLayout from "@/components/page-layout";
import TechnologyContent from "./technology-content";

const TechnologyPage = () => {
  return (
    <PageLayout pageDetails={NAV_LINKS.TECHNOLOGY}>
      <TechnologyContent />
    </PageLayout>
  );
};

export default TechnologyPage;
