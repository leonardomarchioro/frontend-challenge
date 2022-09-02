import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
`;

export const Figure = styled.figure`
  max-width: 400px;
`;
