import { Action } from "redux";
import {
  IFilterParams,
  IResponse,
  ThunkStatus,
} from "../../../interface/products";
import { wineApi } from "../../../service";
import { allProductsGet, filterProductsGet } from "./actions";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../..";

const productsThunk =
  (status: string, filterData: IFilterParams) =>
  async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    switch (status) {
      case "filter":
        const prodsFilter = await wineApi.get(
          `?page=${filterData.page}&limit=10${
            filterData.price && `&filter=${filterData.price}`
          } ${filterData.name && `&name=${filterData.name}`}`
        );

        return dispatch(filterProductsGet(prodsFilter.data));

      case "all":
        const prodsAll = await wineApi.get(`?page=${filterData.page}&limit=10`);

        return dispatch(allProductsGet(prodsAll.data));

      default:
        const prodsDefault = await wineApi.get(
          `?page=${filterData.page}&limit=10`
        );

        return dispatch(allProductsGet(prodsDefault.data));
    }
  };
export default productsThunk;

export type IThunkProducts = ReturnType<typeof productsThunk>;
