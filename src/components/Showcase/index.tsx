import { Pagination } from "@nextui-org/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IFilterParams, IProducts, IResponse } from "../../interface/products";

import productsThunk, { ThunkStatus } from "../../store/modules/products/thunk";
import CardProduct from "../CardProduct";
import { ListProducts } from "./styles";

const Showcase: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();

  const filter = useSelector(
    (state: { filters: IFilterParams }) => state.filters
  );
  const requestProducts = useCallback(
    (page: number) => {
      dispatch(productsThunk(ThunkStatus.filter, { ...filter, page }) as any);
    },
    [dispatch, filter]
  );

  useEffect(() => {
    requestProducts(pageNumber);
  }, [requestProducts, pageNumber]);

  const products = useSelector(
    (state: { products: IResponse }) => state.products
  );

  const handlePage = (page: number) => {
    setPageNumber(page);
    requestProducts(page);
  };

  return (
    <div>
      {products.items ? (
        <>
          <span>{products.totalItems} produtos encontrados</span>
          {
            <ListProducts>
              {products.items.map((ele: IProducts) => (
                <CardProduct product={ele} key={ele.id} />
              ))}
            </ListProducts>
          }
          <Pagination
            color="secondary"
            onChange={handlePage}
            total={products.totalPages}
            initialPage={1}
            page={pageNumber}
          />
        </>
      ) : (
        <h1>Nenhum produto encontrado</h1>
      )}
    </div>
  );
};

export default Showcase;
