export interface IFilterParams {
  page?: number;
  price?: string;
  name?: string;
}

export interface IProducts {
  avaliations: number;
  classification: string;
  country: string;
  discount: number;
  flag: string;
  id: number;
  image: string;
  name: string;
  price: number;
  priceMember: number;
  priceNonMember: number;
  rating: number;
  region: string;
  sommelierComment: string;
  type: string;
  volume: string;
}

export interface IResponse {
  page: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  items: IProducts[];
}
