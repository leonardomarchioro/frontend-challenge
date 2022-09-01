import { Badge, Navbar } from "@nextui-org/react";
import styled from "styled-components";

export const NavBarRoot = styled(Navbar)`
  background-color: ${({ theme }) => theme.background.secondary};
`;

export const CollapseRoot = styled(Navbar.Collapse)`
  ul {
    background-color: ${({ theme }) => theme.background.secondary};
    border: 1px solid rgb(0, 0, 0, 0.15);
  }

  .active {
    color: ${({ theme }) => theme.text.highLight};
    border-bottom: 1px solid ${({ theme }) => theme.text.highLight};
  }
`;

export const CollapseItem = styled(Navbar.CollapseItem)`
  border-bottom: 1px solid rgb(0, 0, 0, 0.15);
  width: 100%;
  padding: 1rem;

  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;

export const NavbarCart = styled.div`
  display: flex;
  align-items: center;

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

export const NavbarItem = styled(Navbar.Item)`
  display: flex;
  gap: 1rem;

  svg {
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;
