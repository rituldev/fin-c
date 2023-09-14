import { IPageModelBase } from "../../models/base-type";
import { Digits } from "../enums/digits";

export const ORDER_BY_ASC = "asc";
export const ORDER_BY_DESC = "desc";
export type ORDER_BY_TYPE = "asc" | "desc";
export enum ORDER_BY_ENUM {
  asc,
  desc,
}
export const DEFAULT_ORDERBY = "CreatedDate";
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_OPTIONS = [5, 10, 20, 30, 40, 50, 100];

export const PAGE_DETAIL: IPageModelBase = {
  page: Digits.One,
  rowsPerPage: DEFAULT_PAGE_SIZE,
  order: ORDER_BY_ASC,
  orderBy: DEFAULT_ORDERBY,
};
