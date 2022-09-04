import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PriceMember = styled.h3`
  font-family: "Lato";
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  color: ${({ theme }) => theme.text.highLight};
  margin: 0;
  span {
    font-size: 24px;
  }
`;

export const PriceNonMember = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.text.span};
`;
