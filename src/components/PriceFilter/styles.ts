import { Collapse } from "@nextui-org/react";
import styled from "styled-components";

export const DesktopView = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MobileView = styled(Collapse)`
  @media screen and (max-width: 1024px) {
    display: flex;
  }
  width: 100%;
  display: none;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.text.primary};
`;
