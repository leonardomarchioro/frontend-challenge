import { Card, Image } from "@nextui-org/react";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 256px;
  width: 40%;
  min-width: 200px;
`;

export const CardRoot = styled(Card)`
  width: 100%;
  height: 400px;
  border-radius: 0;
`;

export const CardBody = styled(Card.Body)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const SImage = styled(Image)`
  width: 90%;
`;

export const ButtonRoot = styled.div`
  width: 100%;

  button {
    width: 100%;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.success};
    color: ${({ theme }) => theme.text.secondary};
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
  }
`;

export const Title = styled.h3`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
`;

export const DiscointRoot = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  > span {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    text-align: center;
    text-decoration-line: line-through;
    color: ${({ theme }) => theme.text.span};
  }

  > h6 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.discoint.background};
    color: ${({ theme }) => theme.discoint.color};
    padding: 0 2px;
    border-radius: 2px;
  }
`;

export const PartnerRoot = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > span {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    color: ${({ theme }) => theme.text.primary};
  }

  > h3 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    color: ${({ theme }) => theme.text.highLight};
    margin: 0;
    > span {
      font-size: 16px;
    }
  }
`;

export const NoPartherSpan = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.text.span};
`;
