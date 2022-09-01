import { Navbar } from "@nextui-org/react";
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
`;
