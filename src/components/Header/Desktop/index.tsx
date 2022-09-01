import { Badge, Input, Navbar } from "@nextui-org/react";

import React, { useState } from "react";

import { IoSearchCircleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import Logo from "../../../assets/logo.png";
import Cart from "../../../assets/carrinho.png";
import Image from "next/image";

// import { Container } from './styles';

const Desktop: React.FC = () => {
  const [showSearch, setShowSerach] = useState(false);

  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Image width={90} height={35} src={Logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="underline"
      >
        <Navbar.Link>Clube</Navbar.Link>
        <Navbar.Link isActive>Loja</Navbar.Link>
        <Navbar.Link>Produtores</Navbar.Link>
        <Navbar.Link>Ofertas</Navbar.Link>
        <Navbar.Link>Eventos</Navbar.Link>
      </Navbar.Content>

      <Navbar.Content>
        <Navbar.Item>
          <>
            {showSearch && <Input contentRight={<IoSearchCircleOutline />} />}
            <IoSearchCircleOutline
              size={50}
              onClick={() => setShowSerach(!showSearch)}
            />
          </>
        </Navbar.Item>
        <Navbar.Item>
          <CgProfile size={40} />
        </Navbar.Item>
        <Navbar.Item>
          <>
            <Image width={40} height={40} src={Cart} alt="Carrinho" />
            <Badge color="success">0</Badge>
          </>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default Desktop;
