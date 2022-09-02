import React, { useEffect, useState } from "react";

// import { Container } from './styles';

const LoadProducts: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <div>
      {loading ? <h1>Carregando...</h1> : <h1>Nenhum produto encontrado</h1>}
    </div>
  );
};

export default LoadProducts;
