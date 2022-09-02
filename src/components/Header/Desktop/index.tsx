import { Badge, Input, Navbar } from "@nextui-org/react";

import React, { useState } from "react";

import { IoSearchCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import Logo from "../../../assets/logo.png";
import Cart from "../../../assets/carrinho.png";
import Image from "next/image";
import SearchInput from "../../SearchInput";
import {
  InputContainer,
  NavbarHightLight,
  NavbarItem,
  NavSearch,
  SBadge,
} from "./styles";

const Desktop: React.FC = () => {
  const [showSearch, setShowSerach] = useState(false);

  return (
    <Navbar variant="sticky" className="Desktop">
      <Navbar.Brand>
        <Image width={90} height={30} src={Logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="underline"
      >
        <Navbar.Link>Clube</Navbar.Link>
        <NavbarHightLight>Loja</NavbarHightLight>
        <Navbar.Link>Produtores</Navbar.Link>
        <Navbar.Link>Ofertas</Navbar.Link>
        <Navbar.Link>Eventos</Navbar.Link>
      </Navbar.Content>

      <Navbar.Content>
        <NavSearch>
          <>
            <InputContainer>
              <SearchInput
                showSearch={showSearch}
                animateActions={{
                  open: { width: 250, opacity: 1 },
                  exit: { width: 0, opacity: 0 },
                }}
              />
            </InputContainer>

            <IoSearchCircleOutline
              size={50}
              onClick={() => setShowSerach(!showSearch)}
            />
          </>
        </NavSearch>
        <NavbarItem>
          <CgProfile size={40} />
        </NavbarItem>
        <NavbarItem>
          <>
            <Image width={40} height={40} src={Cart} alt="Carrinho" />
            <SBadge color="success">0</SBadge>
          </>
        </NavbarItem>
      </Navbar.Content>
    </Navbar>
  );
};

export default Desktop;
