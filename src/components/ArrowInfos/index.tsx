import React from "react";

import { Container } from "./styles";

const ArrowInfos: React.FC<{ country: string; region: string }> = ({
  country,
  region,
}) => {
  return (
    <Container>
      <span className="highLight">Vinhos</span>
      &gt; <span className="highLight">{country}</span>
      &gt; <span>{region}</span>
    </Container>
  );
};

export default ArrowInfos;
