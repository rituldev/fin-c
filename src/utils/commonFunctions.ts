import { IPageModelBase } from "../models/base-type";
import { ORDER_BY_ASC, ORDER_BY_DESC } from "../shared/components/pagination";
import { Digits } from "../shared/enums/digits";
import { PageActions } from "../shared/enums/table-page-actions";

export const stringIsNumber = (value) => isNaN(Number(value)) === false;

// Turn enum into array
export const enumToArray = (enumeration) => {
  return Object.keys(enumeration)
    .filter(stringIsNumber)
    .map((key) => enumeration[key]);
};

export const replaceAll = (str, oldChar, newChar) => {
  const regex = new RegExp(`${oldChar}`, "g");
  return str?.replace(regex, newChar);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handlePageDetailChange = (
  action: any,
  value: any,
  pageDetails: IPageModelBase
) => {
  let pageDetail: IPageModelBase = pageDetails;
  switch (action) {
    case PageActions.OrderDetailChange: {
      const isAsc =
        pageDetail.orderBy === value && pageDetail.order === ORDER_BY_ASC;
      pageDetail = {
        ...pageDetail,
        order: isAsc ? ORDER_BY_DESC : ORDER_BY_ASC,
        orderBy: value,
      };
      break;
    }
    case PageActions.PageChange: {
      pageDetail = {
        ...pageDetail,
        page: value,
      };
      break;
    }
    case PageActions.RowsPerPageChange: {
      pageDetail = {
        ...pageDetail,
        page: Digits.One,
        rowsPerPage: value,
      };
      break;
    }
  }
  return pageDetail;
};

export const handleCheckboxClick = (event, id, selected) => {
  const selectedIndex = selected.indexOf(id);
  let newSelected = [];

  if (selectedIndex === -1) {
    newSelected = newSelected.concat(selected, id);
  } else if (selectedIndex === 0) {
    newSelected = newSelected.concat(selected.slice(1));
  } else if (selectedIndex === selected.length - 1) {
    newSelected = newSelected.concat(selected.slice(0, -1));
  } else if (selectedIndex > 0) {
    newSelected = newSelected.concat(
      selected.slice(0, selectedIndex),
      selected.slice(selectedIndex + 1)
    );
  }

  return newSelected;
};
