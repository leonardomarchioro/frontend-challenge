import styled from "styled-components";

export const ListProducts = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
  padding: 1rem;
`;

export const Container = styled.div`
  max-width: 1025px;
  width: 70%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const TotalProductsFind = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  gap: 4px;
`;
