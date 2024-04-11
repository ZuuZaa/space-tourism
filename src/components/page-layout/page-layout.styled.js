import styled from "styled-components";

export const StyledPageLayout = styled.main`
  @media only screen and (max-width: 768px) {
    background-image: url(${({ mobile }) => mobile});
    padding: 17vh 2.4rem 3rem;
    text-align: center;
  }

  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${({ tablet }) => tablet});
    padding: 13.6rem 4rem 6.2rem;
    text-align: start;
    &:has()
  }

  @media only screen and (min-width: 1440px) {
    background-image: url(${({ desktop }) => desktop});
    padding: 24vh 16rem 5.2rem;

    .subheading-1 {
      padding-left: 0.7rem;
      margin-bottom: 6.4rem;
    }
  }
`;
