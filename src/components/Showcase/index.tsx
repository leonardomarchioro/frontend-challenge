import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IProducts, IResponse } from "../../interface/products";

import { RootState } from "../../store";
import productsThunk from "../../store/modules/products/thunk";

const Showcase: React.FC = () => {
  const dispatch = useDispatch();

  const start = useCallback(() => {
    dispatch(productsThunk("all", { page: 1 }) as any);
  }, [dispatch]);

  useEffect(() => {
    start();
  }, [start]);

  const products = useSelector((state: RootState) => state.products);

  console.log(products);

  return (
    <div>
      <span>N produtos encontrados</span>
      {
        <ul>
          {products.items.map((ele: IProducts) => (
            <li>{ele.name}</li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Showcase;
