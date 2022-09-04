import { Modal } from "@nextui-org/react";
import React, { useState } from "react";
import { ButtonContainer, ModalHeader, ModalRoot } from "./styles";

interface IProps {
  open: boolean;
  close: () => void;
}

const ModalQuantaty: React.FC<IProps> = ({ open, close }) => {
  const [quantaty, setQuantaty] = useState(0);

  const upQuantaty = () => {
    setQuantaty(quantaty + 1);
  };
  const downQuantaty = () => {
    quantaty === 0 ? setQuantaty(quantaty) : setQuantaty(quantaty - 1);
  };

  return (
    <ModalRoot
      closeButton
      aria-labelledby="modal-quantaty"
      open={open}
      onClose={close}
    >
      <ModalHeader>Quantidade: {quantaty}</ModalHeader>
      <Modal.Body>
        <ButtonContainer>
          <button
            className={quantaty > 0 ? "disable" : ""}
            onClick={downQuantaty}
          >
            -
          </button>
          <button onClick={upQuantaty}>+</button>
        </ButtonContainer>
      </Modal.Body>
    </ModalRoot>
  );
};

export default ModalQuantaty;
