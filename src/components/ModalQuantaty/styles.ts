import { Modal } from "@nextui-org/react";
import styled from "styled-components";

export const ModalRoot = styled(Modal)`
  background-color: ${({ theme }) => theme.background.primary};
`;

export const ModalHeader = styled(Modal.Header)`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  color: ${({ theme }) => theme.text.primary};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 56px;
  border-radius: 4px;

  button {
    text-align: center;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid;
    font-weight: 600;
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

  .disable {
    border-color: ${({ theme }) => theme.text.span};
    color: ${({ theme }) => theme.text.span};

    &:hover {
      cursor: default;
      transform: scale(1);
    }
  }
`;
