import styled from "styled-components";

export const StyledHomePage = styled.main`
  display: flex;
  align-items: flex-end;
  .page-wrapper {
    width: 100%;
    display: flex;

    .page-content {
      text-align: center;

      .content-text {
        width: 45rem;

        h1 {
          margin-block: 2.4rem;
        }
      }
    }

    .explore {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      cursor: pointer;

      .explore-button {
        border-radius: 50%;
        background: #fff;
        transition: outline-width 0.3s, opacity 0.3s;
        .btn {
          color: #0b0d17;
        }
        &:hover {
          outline: 8.8rem solid rgba(255, 255, 255, 0.1);
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    background-image: url(${({mobile}) => mobile});
    .page-wrapper {
      height: 100%;
      padding: 11.2rem 2.4rem 5rem;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .page-content {
        text-align: center;
      }

      .explore {
        .explore-button {
          margin-top: 8.1rem;
          width: 15rem;
          height: 15rem;
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-top: 12.55rem;
    background-image: url(${({tablet}) => tablet});
    .page-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15vh;
      padding-bottom: 8vh;
      .page-content {
        text-align: center;
      }
      .explore {
        .explore-button {
          width: 24.2rem;
          height: 24.2rem;
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    padding-inline: 11.5%;
    padding-bottom: 14.5vh;
    background-image: url(${({desktop}) => desktop});
    .page-wrapper {
      display: flex;
      justify-content: space-between;

      .page-content {
        text-align: start;
      }

      .explore {
        .explore-button {
          width: 27.4rem;
          height: 27.4rem;
        }
      }
    }
  }
`;
