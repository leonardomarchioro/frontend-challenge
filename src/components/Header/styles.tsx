import styled from "styled-components";

export const Container = styled.header`
  height: 150px;

  .Desktop {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    height: auto;

    .Desktop {
      display: flex;
    }
    .Mobile {
      display: none;
    }
  }
`;
