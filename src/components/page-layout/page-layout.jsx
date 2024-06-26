import { StyledPageLayout } from "./page-layout.styled";

const PageLayout = ({ pageDetails, children }) => {
  return (
    <StyledPageLayout className="page-container" {...pageDetails.background}>
      <section className="subheading-1">
        <span className="muted">{pageDetails.order}</span>
        <span>{pageDetails.description}</span>
      </section>
      {children}
    </StyledPageLayout>
  );
};

export default PageLayout;
