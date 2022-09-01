import { Navbar, Spacer } from "@nextui-org/react";
import React, { useState } from "react";

import Logo from "../../../assets/logo.png";
import Cart from "../../../assets/carrinho.png";
import Image from "next/image";

import { IoSearchCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import SearchInputMobile from "../../SearchInput/SerachInputMobile";
import {
  CollapseItem,
  CollapseRoot,
  NavbarCart,
  NavbarItem,
  NavBarRoot,
  SBadge,
} from "./styles";

const Mobile: React.FC = () => {
  const [showSearch, setShowSerach] = useState(false);

  return (
    <>
      <NavBarRoot isBordered variant="sticky" className="Mobile">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          <Spacer />
          <Image width={90} height={30} src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Content variant="underline">
          <NavbarItem>
            <>
              <IoSearchCircleOutline
                size={50}
                onClick={() => setShowSerach(!showSearch)}
              />
              <NavbarCart>
                <Image width={40} height={40} src={Cart} alt="Carrinho" />
                <SBadge color="success">0</SBadge>
              </NavbarCart>
            </>
          </NavbarItem>
        </Navbar.Content>
        <CollapseRoot>
          <CollapseItem>Clube</CollapseItem>
          <CollapseItem className="active">Loja</CollapseItem>
          <CollapseItem>Produtores</CollapseItem>
          <CollapseItem>Ofertas</CollapseItem>
          <CollapseItem>Eventos</CollapseItem>
          <CollapseItem>
            <>
              <CgProfile size={35} />
              <Spacer />
              Perfil
            </>
          </CollapseItem>
        </CollapseRoot>
      </NavBarRoot>
      <div>
        <SearchInputMobile showSearch={showSearch} />
      </div>
    </>
  );
};

export default Mobile;
