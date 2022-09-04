import styled from "styled-components";

export const Container = styled.div`
  .Desktop {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .Desktop {
      display: flex;
    }
    .Mobile {
      display: none;
    }
  }
`;
