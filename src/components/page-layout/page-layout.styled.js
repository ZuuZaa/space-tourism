import styled from "styled-components";

export const StyledPageLayout = styled.main`
  @media only screen and (max-width: 768px) {
    background-image: url(${({ mobile }) => mobile});

    padding: 17vh 2.4rem 3rem;
    text-align: center;
    &:has(.tech-container) {
      padding-inline: 0;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${({ tablet }) => tablet});
    padding: 13vh 2.4rem 0;
    text-align: start;
    height: calc(100vh - 9.8rem);
    &:has(.tech-container) {
      padding-inline: 0;
    }
  }

  @media only screen and (min-width: 1440px) {
    background-image: url(${({ desktop }) => desktop});
    padding: 24vh 16rem 5.2rem;

    .subheading-1 {
      padding-left: 0.7rem;
    }

    &:has(.tech-container) {
      padding-right: 0;
    }
  }
`;
