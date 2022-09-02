import React, { useEffect, useState } from "react";
import EmptyShowcase from "../EmptyShowcase";

// import { Container } from './styles';

const LoadProducts: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return loading ? <h1>Carregando...</h1> : <EmptyShowcase />;
};

export default LoadProducts;
