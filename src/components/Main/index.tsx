import { Pagination } from "@nextui-org/react";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IFilterParams, IResponse } from "../../interface/products";
import productsThunk, { ThunkStatus } from "../../store/modules/products/thunk";
import LoadProducts from "../LoadProducts";
import PriceFilter from "../PriceFilter";
import Showcase from "../Showcase";
import { Container, PaginationContainer } from "./styles";

const Main: React.FC = () => {
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
    requestProducts(1);
    setPageNumber(1);
  }, [requestProducts]);

  const products = useSelector(
    (state: { products: IResponse }) => state.products
  );

  const handlePage = (page: number) => {
    setPageNumber(page);
    requestProducts(page);
  };

  return (
    <>
      <Container>
        <PriceFilter />
        {products.items && products.items.length ? (
          <>
            <Showcase products={products} />
          </>
        ) : (
          <LoadProducts />
        )}
      </Container>
      {products.items && products.items.length ? (
        <PaginationContainer>
          <Pagination
            onChange={handlePage}
            total={products.totalPages}
            initialPage={1}
            page={pageNumber}
            size="xs"
          />
        </PaginationContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Main;
