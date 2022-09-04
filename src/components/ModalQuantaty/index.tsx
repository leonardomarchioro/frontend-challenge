import { Modal } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProducts } from "../../interface/products";
import Product from "../../pages/product";
import cartThunk, {
  ICart,
  CartThunkStatus,
} from "../../store/modules/cart/thunk";
import { ButtonContainer, ModalHeader, ModalRoot } from "./styles";

interface IProps {
  open: boolean;
  close: () => void;
  product: IProducts;
}

const ModalQuantaty: React.FC<IProps> = ({ open, close, product }) => {
  const { cart } = useSelector(
    (state: { cart: { quantaty: number; cart: ICart[] } }) => state.cart
  );

  const [quantatyProd, setQuantatyProd] = useState(0);

  useEffect(() => {
    const productOnCart = cart.find((ele) => ele.id === product.id);
    productOnCart && setQuantatyProd(productOnCart?.quantaty!);
  }, [cart, product]);

  const dispatch = useDispatch();

  const upQuantaty = () => {
    dispatch(cartThunk(CartThunkStatus.ADD, cart, product) as any);
    setQuantatyProd(quantatyProd + 1);
  };
  const downQuantaty = () => {
    dispatch(cartThunk(CartThunkStatus.REMOVE, cart, product) as any);
    quantatyProd === 0
      ? setQuantatyProd(quantatyProd)
      : setQuantatyProd(quantatyProd - 1);
  };

  return (
    <ModalRoot
      closeButton
      aria-labelledby="modal-quantaty"
      open={open}
      onClose={close}
    >
      <ModalHeader>Quantidade: {quantatyProd}</ModalHeader>
      <Modal.Body>
        <ButtonContainer>
          <button
            className={quantatyProd > 0 ? "" : "disable"}
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
