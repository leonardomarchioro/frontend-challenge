import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.background.primary};
`;
