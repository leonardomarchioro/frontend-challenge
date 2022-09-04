import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 2rem;
  max-width: 1500px;
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  color: ${({ theme }) => theme.text.primary};
`;

export const CommentContaine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.success};
  width: 328px;
  height: 56px;
  border-radius: 4px;
`;

export const Spacer = styled.span`
  width: 0.5px;
  height: 65%;
  background-color: ${({ theme }) => theme.text.secondary};
`;

export const SButtons = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  > span {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: ${({ theme }) => theme.text.secondary};
  }

  > button {
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid;
    border-color: ${({ theme }) => theme.text.secondary};
    color: ${({ theme }) => theme.text.secondary};
    width: 25px;
    height: 25px;
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

export const Span = styled.span`
  width: 40%;
  color: ${({ theme }) => theme.text.secondary};
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
`;
