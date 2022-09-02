import styled from "styled-components";

export const Container = styled.header`
  height: 60px;

  .Desktop {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    .Desktop {
      display: flex;
    }
    .Mobile {
      display: none;
    }
  }
`;
