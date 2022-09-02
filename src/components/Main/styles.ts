import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 5rem;
  padding: 3rem;
  width: 90%;
  max-width: 1700px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
