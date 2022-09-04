import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1500px;
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-style: normal;
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  color: ${({ theme }) => theme.text.primary};
`;

export const CommentContaine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme }) => theme.text.primary};
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.text.span};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  padding: 1rem;
  background-color: ${({ theme }) => theme.background.secondary};
`;

export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DiscointPrice = styled.span`
  text-align: center;
  background-color: ${({ theme }) => theme.discoint.background};
  color: ${({ theme }) => theme.discoint.color};
  border-radius: 4px;
  position: relative;
  top: -30px;
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.text.span};
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  text-decoration-line: line-through;
`;

export const ButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.success};
  border-radius: 4px;

  > button {
    width: 100%;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.success};
    color: ${({ theme }) => theme.text.secondary};
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
  }
`;
