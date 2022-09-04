import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.text.span};

  .highLight {
    color: ${({ theme }) => theme.text.highLight};
  }
`;
