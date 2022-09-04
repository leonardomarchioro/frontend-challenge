import { Image } from "@nextui-org/react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Flag = styled(Image)`
  width: 20px;
  margin: 0;
`;

export const Span = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.text.span};
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
