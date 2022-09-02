import { Pagination } from "@nextui-org/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IProducts, IResponse } from "../../interface/products";

import productsThunk from "../../store/modules/products/thunk";
import CardProduct from "../CardProduct";

const Showcase: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();

  const requestProducts = useCallback(
    (page: number) => {
      dispatch(productsThunk("all", { page }) as any);
    },
    [dispatch]
  );

  useEffect(() => {
    requestProducts(pageNumber);
  }, [requestProducts, pageNumber]);

  const products = useSelector(
    (state: { products: IResponse }) => state.products
  );

  console.log(products);

  const handlePage = (page: number) => {
    console.log(page);
    setPageNumber(page);
    requestProducts(page);
  };

  return (
    <div>
      <span>{products.totalItems} produtos encontrados</span>
      {
        <ul>
          {products.items.map((ele: IProducts) => (
            <CardProduct product={ele} key={ele.id} />
          ))}
        </ul>
      }
      <Pagination
        color="secondary"
        onChange={handlePage}
        total={products.totalPages}
        initialPage={1}
        page={pageNumber}
        siblings={1}
      />
    </div>
  );
};

export default Showcase;
