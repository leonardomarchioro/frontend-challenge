import { motion } from "framer-motion";
import styled from "styled-components";

export const FormMotion = styled(motion.form)`
  div {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    height: 60px;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 2rem;
    z-index: 200;

    > div {
      width: 15rem;
      padding: 1rem;
      background-color: ${({ theme }) => theme.background.secondary};
      border: 1px solid rgb(0, 0, 0, 0.15);
    }
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    justify-content: center;
    z-index: 200;

    > div {
      width: 90%;
    }
  }
`;
