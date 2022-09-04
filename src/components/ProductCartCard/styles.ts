import { Card, Image } from "@nextui-org/react";
import styled from "styled-components";

export const CardRoot = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardHeader = styled(Card.Header)`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.text.primary};
`;

export const CardBody = styled(Card.Body)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
`;

export const SImage = styled(Image)`
  margin: 0;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: ${({ theme }) => theme.text.span};
  }
`;

export const CardFooter = styled(Card.Footer)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > button {
    font-weight: 700;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid;
    border-color: ${({ theme }) => theme.success};
    color: ${({ theme }) => theme.success};
    width: 35px;
    height: 35px;
    transition: 0.5s;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;
