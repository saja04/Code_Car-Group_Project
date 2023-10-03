import React from "react";
import paginationStyles from "./pagination.module.css";

function Pagination({ vehiclesPerPage, totalVehicles, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVehicles / vehiclesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={paginationStyles.pagination}>
      <ul className={paginationStyles.pageNumbers}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number === currentPage
                ? paginationStyles.pageItemActive
                : paginationStyles.pageItem
            }            
          >
            <button
              onClick={() => number !== currentPage && paginate(number)}
              className={paginationStyles.pageLink}
              disabled={number === currentPage}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
