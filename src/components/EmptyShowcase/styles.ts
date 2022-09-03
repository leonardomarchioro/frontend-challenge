import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2rem;
  max-width: 1025px;
  width: 70%;

  @media screen and (max-width: 1024px) {
    align-content: center;
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.text.span};
`;

export const Figure = styled.figure`
  max-width: 400px;
`;
