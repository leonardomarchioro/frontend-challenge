import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const SLink = styled.div`
  width: 80%;
  padding: 1rem;

  a,
  svg {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.text.primary};
    transition: 0.5s;
    &:hover {
      color: ${({ theme }) => theme.text.span};
    }
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.text.span};
`;
