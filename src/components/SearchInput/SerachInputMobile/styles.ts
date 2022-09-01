import { motion } from "framer-motion";
import styled from "styled-components";

export const FormMotion = styled(motion.form)`
  height: 60px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2rem;

  > div {
    width: 15rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.background.secondary};
    border: 1px solid rgb(0, 0, 0, 0.15);
  }
`;
