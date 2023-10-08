import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../Redux/actions';

const Pagination = () => {
  const totalArticles = useSelector((state) => state.articles.length);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalArticles / itemsPerPage);

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPage(newPage));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${i === currentPage ? 'active' : ''}`}
        >
          <button
            className="page-link"
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {renderPageNumbers()}
      </ul>
    </nav>
  );
};

export default Pagination;