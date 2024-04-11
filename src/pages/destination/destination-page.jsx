import { NAV_LINKS } from "@/config/constans";
import DestinationContent from "./destination-content";
import PageLayout from "@/components/page-layout";

const DestinationPage = () => {
  return (
    <PageLayout pageDetails={NAV_LINKS.DESTINATION}>
      <DestinationContent />
    </PageLayout>
  );
};

export default DestinationPage;
