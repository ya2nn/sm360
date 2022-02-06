import PropTypes from 'prop-types'
import React from "react";

import Icon from '../../dist/atoms/Icon'
import PaginationItem from '../../dist/molecules/PaginationItem'

const Pagination = ({ extraClasses, pagesQuantity, currentPage, onClick }) => {
  if (pagesQuantity <= 1) return null

  return (
    <div
      className={`m-pagination flex w-full items-center justify-end ${extraClasses}`}
    >
      {pagesQuantity > 2 && (
        <PaginationItem
          onClick={() => onClick(1)}
          isDisabled={currentPage === 1}
        >
          <Icon symbolId='page-left-double' extraClasses='h-[15px] w-[15px]' />
        </PaginationItem>
      )}

      <PaginationItem
        onClick={() => onClick(currentPage - 1)}
        isDisabled={currentPage === 1}
      >
        <Icon symbolId='page-left' extraClasses='h-[15px] w-[15px]' />
      </PaginationItem>

      {pagesQuantity > 1 && currentPage > 1 && (
        <PaginationItem
          extraClasses='hover:text-primary'
          onClick={() => onClick(currentPage - 1)}
        >
          {currentPage - 1 > 1 && '...'}
          {currentPage - 1}
        </PaginationItem>
      )}

      <PaginationItem
        extraClasses='bg-primary text-onPrimary cursor-default'
        isDisabled
      >
        {currentPage}
      </PaginationItem>

      {pagesQuantity > 1 && currentPage < pagesQuantity && (
        <PaginationItem onClick={() => onClick(currentPage + 1)}>
          {currentPage + 1}
          {currentPage + 1 < pagesQuantity && '...'}
        </PaginationItem>
      )}

      <PaginationItem
        onClick={() => onClick(currentPage + 1)}
        isDisabled={currentPage === pagesQuantity}
      >
        <Icon symbolId='page-right' extraClasses='h-[15px] w-[15px]' />
      </PaginationItem>

      {pagesQuantity > 2 && (
        <PaginationItem
          onClick={() => onClick(pagesQuantity)}
          isDisabled={currentPage === pagesQuantity}
        >
          <Icon symbolId='page-right-double' extraClasses='h-[15px] w-[15px]' />
        </PaginationItem>
      )}
    </div>
  )
}

Pagination.propTypes = {
  /** `isRequired` - Pages Quantity */
  pagesQuantity: PropTypes.number.isRequired,
  /** `isRequired` - Number of Current Page */
  currentPage: PropTypes.number.isRequired,
  /** onClick event */
  onClick: PropTypes.func,
  /** Extra classes */
  extraClasses: PropTypes.string,
}

Pagination.defaultProps = {
  pagesQuantity: 0,
  currentPage: 0,
}

export default Pagination