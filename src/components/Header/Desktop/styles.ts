import { Badge, Navbar } from "@nextui-org/react";
import styled from "styled-components";

export const InputContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row-reverse;
  padding: 5px;
`;

export const NavSearch = styled(Navbar.Item)`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  svg {
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

export const NavbarItem = styled(Navbar.Item)`
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const SBadge = styled(Badge)`
  position: relative;
  bottom: -10px;
  left: -15px;
`;

export const NavbarHightLight = styled(Navbar.Link)`
  color: ${({ theme }) => theme.text.highLight};

  border-bottom: 0.3rem solid ${({ theme }) => theme.text.highLight};
`;
