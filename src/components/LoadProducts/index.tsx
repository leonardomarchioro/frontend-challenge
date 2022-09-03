import { Loading } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import EmptyShowcase from "../EmptyShowcase";
import { Container } from "./styles";

const LoadProducts: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return loading ? (
    <Container>
      <Loading size="lg" type="points" color="error">
        Carregando...
      </Loading>
    </Container>
  ) : (
    <EmptyShowcase />
  );
};

export default LoadProducts;
