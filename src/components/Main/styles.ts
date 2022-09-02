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
    padding: 2rem;
  }
`;

export const PaginationContainer = styled.div`
  margin-bottom: 2rem;

  > nav {
    > button {
      background-color: ${({ theme }) => theme.background.primary};
      border: 1px solid;
      border-color: ${({ theme }) => theme.text.highLight};
      color: ${({ theme }) => theme.text.highLight};
    }

    > div {
      background-color: ${({ theme }) => theme.text.highLight};
    }
  }
`;
