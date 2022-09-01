export interface IFilterParams {
  page?: number;
  price?: string;
  name?: string;
}

export enum ThunkStatus {
  filter = "filter",
  all = "all",
}

export interface IProducts {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
  type: string;
  classification: string;
  size: string;
  rating: number;
  avaliations: number;
  country: string;
  region: string;
  flag: string;
  sommelierComment: string;
}

export interface IResponse {
  page: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  items: IProducts[];
}
