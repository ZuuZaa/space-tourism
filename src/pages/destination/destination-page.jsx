import { PageLayout } from "@/components/page-layout";
import { NAV_LINKS } from "@/config/constans";
import { DestinationContent } from "../../components/destination-content/destination-content";

const DestinationPage = () => {
  return (
    <PageLayout pageDetails={NAV_LINKS.DESTINATION}>
      <DestinationContent />
    </PageLayout>
  );
};

export default DestinationPage;
