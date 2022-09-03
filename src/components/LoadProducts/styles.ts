import styled from "styled-components";

export const Container = styled.div`
  max-width: 1025px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
