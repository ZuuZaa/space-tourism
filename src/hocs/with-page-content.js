import { PageLayout } from "@/components/page-layout";
import { NAV_LINKS } from "@/config/constans";

const withPageLayout = (pageName) => {
    const pageData = NAV_LINKS[pageName.toUpperCase()];
    return <PageLayout pageData={pageData} />;
};

export default withPageLayout;
