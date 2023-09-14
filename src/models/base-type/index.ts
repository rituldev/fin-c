import {
  ORDER_BY_ENUM,
  ORDER_BY_TYPE,
} from "../../shared/components/pagination";

export interface IBaseCreateRequest {
  createdBy?: number;
  createdDate?: Date;
}

export interface IBaseUpdateRequest {
  updatedBy?: number;
  updatedDate?: Date;
}

export interface IBaseSearchRequest {
  /* An array defining all columns in the table. */
  columns?: Array<IColumn>;
  /* An array defining how many columns are being ordering upon - i.e. if the array length is 1, then a single column sort is being performed, otherwise a multi-column sort is being performed. */
  order?: Array<IOrder>;
  /* Paging first record indicator */
  start?: number;
  /* Number of records that the table can display incurrent draw. */
  length?: number;
  /* Passing Column name and Value in json object */
  customSearch?: string;
}

export interface IColumn {
  /* Column's name, as defined by columns.name. */
  name?: string;
  /* Column's data source, as defined by columns.data. */
  data?: string;
  /* Flag to indicate if this column is orderable (true) or not (false) */
  orderable?: boolean;
  /* Flag to indicate if this column is Searchable (true) or not (false) */
  searchable?: boolean;
  /* Specific search value. */
  search?: string;
  /* For Width of column */
  width?: number;
  /* For css of column */
  className?: string;
}

export interface IOrder {
  column: number;
  dir: ORDER_BY_ENUM;
}

export interface SearchResult<T> {
  records: T[];
  totalRecords: number;
}

export interface IPageModelBase {
  order?: ORDER_BY_TYPE;
  orderBy?: string;
  page?: number;
  rowsPerPage?: number;
}
