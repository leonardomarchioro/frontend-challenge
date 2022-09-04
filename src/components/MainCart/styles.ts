import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListCards = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 90%;
  max-width: 1200px;
  margin-bottom: 11rem;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.background.secondary};
  padding: 1rem;
  height: 10rem;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  width: 90%;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.text.span};
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  button:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }
`;

export const Empty = styled.h1`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.text.span};
`;
