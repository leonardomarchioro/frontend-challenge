import { Navbar, Spacer } from "@nextui-org/react";
import React, { useState } from "react";

import Logo from "../../../assets/logo.png";
import Cart from "../../../assets/carrinho.png";
import Image from "next/image";

import { IoSearchCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import {
  CollapseItem,
  CollapseRoot,
  NavbarCart,
  NavbarItem,
  NavBarRoot,
  SBadge,
} from "./styles";
import SearchInput from "../../SearchInput";
import { useRouter } from "next/router";

const Mobile: React.FC<{ quantaty: number }> = ({ quantaty }) => {
  const [showSearch, setShowSerach] = useState(false);

  const router = useRouter();

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
              <NavbarCart onClick={() => router.push("/cart")}>
                <Image width={40} height={40} src={Cart} alt="Carrinho" />
                <SBadge color="success">{quantaty}</SBadge>
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
        <SearchInput
          showSearch={showSearch}
          animateActions={{
            open: { height: 60, y: 0 },
            exit: { height: 0, y: -100 },
          }}
        />
      </div>
    </>
  );
};

export default Mobile;
